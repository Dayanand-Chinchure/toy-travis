//This is simple get call
'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to jarvis . . . B-13 B-18 B-19 \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
