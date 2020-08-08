const router = require("express").Router();
const store = require("../db/store");

//Get all notes
router.get("/notes", (req, res) => {
    store
      .getNotes()
      .then((notes) => res.json(notes))
      .catch((err) => res.status(500).json(err));
  });

  