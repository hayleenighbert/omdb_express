var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../models');

router.get('/:imdbId')(function(req, res){
	db.favorite.find({where:
		{imdbId: req.params.imdbId}
		}).then(function(favorite){
			db.post.create({
				favoriteId: favorite.id,
				title: req.params.title,
				content: req.params.content
			})
		});




module.exports = router;