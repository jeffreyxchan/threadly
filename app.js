var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./app/models/comments');

mongoose.connect('mongodb://localhost:27017/comments');

app = express(); // intialize express app

app.set('port', (process.env.PORT || 8080));

app.use('/', express.static(path.join(__dirname, 'app/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/comments', function (req, res) {
    var message = new Comment();
    var text = Object.keys(req.body);
    message.comment = text[0];
    
    message.save();
    
    res.json({message: "post request received"});
});

app.get('/comments', function (req, res) {
    Comment.find(function (err, comments) {
        res.json(comments);
    });
});

app.delete('/comments', function(req, res) {
    Comment.remove({}, function (err, comment) {
        res.json({message: 'deleted'});
    });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});