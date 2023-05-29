const path = require("path");
const router = require('express').Router();
// Defines the route that sends 'index.html' as a response to a client when a GET request is made
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// Defines the route that sends 'notes.html" as a response to a client when a GET request is made 
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});
// Catch-all routes routes of any other type of GET request
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;