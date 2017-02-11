var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

app = express(); // intialize express app

app.set('port', (process.env.PORT || 8080));

app.use('/', express.static(path.join(__dirname, 'app/')));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});