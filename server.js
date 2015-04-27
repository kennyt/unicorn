var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(3050, function() {
  console.log('Listening on port: ' + 3000);
});