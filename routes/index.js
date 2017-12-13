var express = require('express');
var router = express.Router();

var JSON = require('../myJSON.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(JSON)
});

module.exports = router;
