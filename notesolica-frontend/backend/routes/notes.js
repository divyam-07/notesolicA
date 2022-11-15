const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser")
const Note= require("../models/Notes") 

router.get("/fetchnotes", fetchuser, async(req, res) => {
  try {
    const notes = await Note.find({user:req.user.id})
    res.json(notes)
  } catch (error) {
    console.error(error)
    res.status(500).send("Internal server error")
  }
});

module.exports = router;
