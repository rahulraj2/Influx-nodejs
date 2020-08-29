var express = require('express');
var router = express.Router();

var hel = require("../lib/health")

/* GET home page. */
router.get('/', function(req, res, next) {
    var result =  hel.printHealth()
  res.send(result)
});

module.exports = router;