var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var parseurl = require('parseurl');

require('express-helpers')(app);
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.render('index');
});

app.use('/results', require('./controllers/results'));
app.use('/favorite', require('./controllers/favorite'));
app.use('/', require('./controllers/movie'));
app.use('/post', require('./controllers/favorite'));
app.use('/tags', require('./controllers/favorite'));

app.listen(3000);