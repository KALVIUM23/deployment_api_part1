const express = require('express');
const { resolve } = require('path');
<<<<<<< HEAD
require('dotenv').config();
=======
>>>>>>> 2c112e290717192f46429debd90bb4a738969949

const app = express();
const port = 3010;

<<<<<<< HEAD
const config ={
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvium: process.env.IS_KALVIUM === 'true' ,

};

app.use(express.static('static'));
console.log(config);

=======
app.use(express.static('static'));
>>>>>>> 2c112e290717192f46429debd90bb4a738969949

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
<<<<<<< HEAD

module.exports =config;
=======
>>>>>>> 2c112e290717192f46429debd90bb4a738969949
