const path = require("path");
const router = require("express").Router();

//get notes.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

//other routes get index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });