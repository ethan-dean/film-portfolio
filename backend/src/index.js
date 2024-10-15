"use strict";
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'dist')));
// Handle any other requests by sending the React app's index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
