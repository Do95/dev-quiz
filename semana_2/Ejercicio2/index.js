
const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  let texto = 'Happy Punk Panda',
	textoReversa = texto.split('').reverse().join('');
  res.send(textoReversa);
});
app.listen(PORT, HOST);
