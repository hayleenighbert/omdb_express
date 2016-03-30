var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res){
	var searchTerm = req.query.s;
    request('http://omdbapi.com/?s=' + searchTerm,
    	function(error, response, body){
        if(!error && response.statusCode === 200){
            var data = JSON.parse(body);
            res.render('results', {myData: data.Search, searchTerm: searchTerm});
        }
    });
});


module.exports = router;