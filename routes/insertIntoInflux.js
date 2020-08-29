var express = require('express');
var router = express.Router();

var insertIntoInflux = require("../lib/updateJson")

/* GET home page. */
router.post('/', async function(req, res, next) {
  var result= await insertIntoInflux.updateJsonRecord(req.body)
   res.send( result ? result : 'Not Inserted')
 /*    .then(() =>{
        res.send({result:"done"})
    })
    .catch((err) =>{
        console.log(err)
    }) */
  
});

module.exports = router;