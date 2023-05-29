const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const apiRoutes = require('./routes/apiRoutes/api-routes');
const htmlRoutes = require('./routes/htmlRoutes/html-routes');

app.use(express.static('public')); // serve static files from the public directory

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({extended: true}));// Enables Express to parse incoming URL-encoded 
app.use(express.json());// parse incoming JSON data

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} 📝 Welcome!`);
  });
