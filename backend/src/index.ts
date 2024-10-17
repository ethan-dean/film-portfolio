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
app.get('/v1/cat', async (req: any, res: any) => {
   try 
   {
       const imageList = await theCatAPI.images.searchImages({limit: 100,});
       const urlList = imageList.map((image: any) => {
         return image.url;
       });
       res.status(200).json({ urlList: urlList });
   } 
   catch (error)
   {
       console.error("Error fetching cat image:", error);
       res.status(500).send("Failed to fetch cat image");
   }
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
