var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:id/tags', function(req, res) {
	res.render('favorite/tags', {id:req.params.id});
});

module.exports = router;