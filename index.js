const express = require('express');
const { resolve } = require('path');

require('dotenv').config();


const app = express();
const port = 3010;
const config ={
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvium: process.env.IS_KALVIUM === 'true' ,

};

app.use(express.static('static'));
console.log(config);


app.use(express.static('static'));


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports =config;

