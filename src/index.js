var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('b3ec-ca19-2340-90ac');
});

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
