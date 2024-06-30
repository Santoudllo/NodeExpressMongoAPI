const express = require('express');
const app = express();

const port = process.env.PORT || 3000; //  3000 le port choisi 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Definir  la route 
app.get('/', (req, res) => {
  res.send('Hello');
});