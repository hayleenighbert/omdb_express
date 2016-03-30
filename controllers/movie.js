var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:imdbID', function(req, res){
	var id = req.params.imdbID;
    console.log(id);
	var url = 'http://www.omdbapi.com/?i=' + id;
	request(url,
    	function(error, response, body){
        if(!error && response.statusCode === 200){
            var data = JSON.parse(body);
            res.render('movie', {info:data});

        }
    });
});



module.exports = router;