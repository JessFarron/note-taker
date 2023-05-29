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

// Helper functions to read and save notes
function getNotes() {
  const dbJson = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(dbJson);
}

function saveNotes(notes) {
  fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
}

module.exports = router;


  /* {
  "notes": [
    {
      "title": "shopping ",
      "text": "tacos \nlala\n",
      "id": "cc8ae885-bfe8-48a9-9494-1ffb86bd2b1b"
    },
    {
      "title": "laa",
      "text": "l68",
      "id": "c741bff4-51f5-4cac-8d83-d60e8c71898f"
    }
  ]
} */