const express = require('express');
const path = require('path');
const { TheCatAPI } = require("@thatapicompany/thecatapi");
require('dotenv').config();

const theCatAPI = new TheCatAPI(process.env.API_KEY);

const app = express();
const port = process.env.PORT || 3000;

// Trust Nginx as the proxy
app.set('trust proxy', 1); 

// Provide API endpoint to get random cat picture
app.get('/v1/cat', async (req: any, res:any) => {
   const image = await theCatAPI.images.searchImages();
   res.sendFile(image);
});

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'client/dist')));

// Handle any other requests by sending the React app's index.html file
app.get('*', (req: any, res: any) => {
   res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});
