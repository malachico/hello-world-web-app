const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Basic API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js Express Backend!' });
});

// Root path should serve index.html from frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
