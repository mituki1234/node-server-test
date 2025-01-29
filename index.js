// index.js
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(80, () => {
  console.log('Server listening on port 3000');
});
