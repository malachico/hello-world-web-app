const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the current directory (for index.html)
app.use(express.static(__dirname));

// Define a simple API endpoint
app.get('/api/hello', (req, res) => {
    res.send('Hello World from Server!');
});

// Serve index.html for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});