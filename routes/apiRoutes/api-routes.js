const router = require('express').Router();
const { createNewNote, updateDb } = require("../../lib/notes");
const { v4: uuidv4 } = require('uuid'); // Unique ID 
const fs = require('fs');
const path = require('path');

// Var to createpath to the JSON database file:
const dbPath = path.join(__dirname, '../../db/db.json');

//HTTP methods for requests. All tagging notes

router.get("/notes", (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

router.post("/notes", (req, res) => {
  const notes = getNotes();
  req.body.id = uuidv4();
  const newNote = createNewNote(req.body, notes);
  saveNotes(notes);
  res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
  const notes = getNotes();
  const params = req.params.id;
  updateDb(params, notes);
  saveNotes(notes);
  res.redirect('');
});

function getNotes() {
  const dbJson = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(dbJson);
}

function saveNotes(notes) {
  fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
}

module.exports = router;


  