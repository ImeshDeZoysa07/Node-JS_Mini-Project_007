// server.ts

import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

app.get('/image', (req, res) => {
  const imageName = req.query.name as string;
  const imagePath = path.join(__dirname, 'images', imageName);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(404).send('Image not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
