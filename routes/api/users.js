const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const transport = require("../../service/sendMail.service");
const { CONSTANT, EMAIL_MSGS } = require("../../utils/constant");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateForgotInput = require("../../validation/forgot");
const validateChangePasswordInput = require("../../validation/change-password");

const User = require("../../models/User");
const Notification = require("../../models/Notification");

// POST /api/users/register
// sign up a new user
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email Already Exists";
      return res.status(400).json(errors);
    } else {
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        stand: false,
      };
      const newUser = new User(userData);
      const newNotification = new Notification({
        userID: newUser._id,
        text: "Welcome to Festyline, please create your profile.",
      });
      (async function () {
        try {
          await transport.sendRegisterMail(newUser);
          await transport.sendConfirmEmail(newUser);
        } catch (e) {
          console.log(e);
        }
      })();
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newNotification.save();
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// POST /api/users/login
// login the user

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name, stand: user.stand };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// POST /api/users/confirm
// confirm email
router.get("/confirm/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      // A user with that id does not exist in the DB. Perhaps some tricky
      // user tried to go to a different url than the one provided in the
      // confirmation email.
      if (!user) {
        res.json({ msg: EMAIL_MSGS.couldNotFind });
      }

      // The user exists but has not been confirmed. We need to confirm this
      // user and let them know their email address has been confirmed.
      else if (user && !user.confirmed) {
        User.findByIdAndUpdate(id, { confirmed: true })
          .then(() => res.json({ msg: EMAIL_MSGS.confirmed }))
          .catch((err) => console.log(err));
      }

      // The user has already confirmed this email address.
      else {
        res.json({ msg: EMAIL_MSGS.alreadyConfirmed });
      }
    })
    .catch((err) => console.log(err));
});

// GET /api/users/current
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

// GET /api/users/<:user_id>
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(500).json({ error: "Error in get api/users/:id. " + err })
    );
});

router.post("/forgot", (req, res) => {
  const { errors, isValid } = validateForgotInput(req.body);
  if (!isValid) {
    return res.status(400).json({
      msg: errors.email,
      error: true,
    });
  }

  const email = req.body.email;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "No account with that email address exists.",
        error: true,
      });
    }
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      stand: user.stand,
    };

    const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });

    (async function () {
      try {
        await transport.sendForgotPasswordMail(payload, token);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          msg: "Something wrong",
          error: true,
        });
      }
    })();
    res.json({
      msg:
        "An e-mail has been sent to " + email + " with further instructions.",
    });
  });
});

// POST /api/users/register
// sign up a new user
router.post("/change-password", (req, res) => {
  const { errors, isValid } = validateChangePasswordInput(req.body);

  if (!isValid) {
    return res.status(400).json({
      msg: errors.password,
      error: true,
    });
  }
  var user = {};
  try {
    user = jwt.verify(req.body.token, keys.secretOrKey);
  } catch (err) {
    // err
    return res.status(400).json({
      msg: "Invalid token",
      error: true,
    });
  }
  User.findOne({ email: user.email }).then((user) => {
    if (!user) {
      errors.email = "Email Already Exists";
      return res.status(400).json({
        msg: "No account with that email address exists.",
        error: true,
      });
    } else {
      user.password = req.body.password;

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;

          user.password = hash;
          user
            .save()
            .then((user) => res.json({msg: "Success"}))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
