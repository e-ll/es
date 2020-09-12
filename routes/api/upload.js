const express = require("express");
const router = express.Router();
const passport = require("passport");
const cors = require("cors");
const multer = require('multer');
router.options("*", cors());



  const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      // Mimetype stores the file type, set extensions according to filetype
      switch (file.mimetype) {
        case 'image/jpeg':
          ext = '.jpeg';
          break;
        case 'image/png':
          ext = '.png';
          break;
        case 'image/gif':
          ext = '.gif';
          break;
      }

      cb(null, file.originalname.slice(0, 4) + Date.now() + ext);
    }
  });
  const upload = multer({storage: storage});

  router.post('/', cors(), upload.single('file'), function (req, res, next) {
    if (req.file && req.file.originalname) {
      console.log(`Received file ${req.file.originalname}`);
    }

    res.send({ responseText: req.file.path }); // You can send any response to the user here
  });








// const Event = require("../../models/Event");
// const Notification = require("../../models/Notification");

// // POST /api/events/<:event_id>/comments
// // add comment
// router.post(
//   "/",
  
//   (req, res) => {
    
//           return res.json(req.body);
//         });
      
//   router.get(
//     "/all",

//     (req, res) => {
//       console.log(req.body);
//       return res.json("event");
//     }
//   );




module.exports = router;
