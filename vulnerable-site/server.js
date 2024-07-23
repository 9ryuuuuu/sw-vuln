const express = require('express');
const cors = require('cors'); 
const path = require('path');
const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/search', (req, res) => {
  const query = req.query.query;
  res.send(`<h1>Search Results for: ${query}</h1>`);
});

// Vulnerable JSONP Endpoint
app.get('/jsonp', (req, res) => {
  const callback = req.query.callback;
  const data = { data: "example data" };

  res.setHeader('Content-Type', 'application/javascript');
  res.send(`${callback}(${JSON.stringify(data)});`);
});

app.get('/uploaded/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, 'uploaded', filename);
  res.setHeader('Service-Worker-Allowed', '/'); 
  res.sendFile(filepath);
});

app.listen(port, () => {
  console.log(`Vulnerable app listening at http://localhost:${port}`);
});
