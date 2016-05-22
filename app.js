var express = require('express');
var helmet = require('helmet');
var logger = require('winston');

var port = 80;

var app = express();

app.use(helmet());

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

app.get('/', function(req, res){
	res.render('home.ejs');
});

console.log("Server running at http://localhost:" + port + "/");

app.listen(port);
