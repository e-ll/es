const express = require("express");
const router = express.Router();
const passport = require("passport");

const validateCommentInput = require("../../validation/comment");

const Event = require("../../models/Event");
const Notification = require("../../models/Notification");

// POST /api/events/<:event_id>/comments
// add comment
router.post(
  "/upload",
  
  (req, res) => {
    console.log(req.body);
          return res.json("event");
        });
      
  




module.exports = router;
