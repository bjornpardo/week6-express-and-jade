var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

var hikes = [
	'One',
	'Two',
	'Three'
];

var user = {
	name: 'Bjorn',
	fave: 'One'
};

app.get('/', function(req, res) {
	res.render('index', {
		boulderHikes: hikes,
		userData: user
	});
});

app.get('/bjorn', function(req, res) {
	res.render('bjorn');
});

var server = app.listen(7696, function() {
	console.log('Express server listening on port ' + server.address().port);
});
