var express = require('express');
var router = express.Router();

module.exports = function(app) {
	router.get('/', function(req, res) {
    	res.render('members');
  	});
	return router;
}
