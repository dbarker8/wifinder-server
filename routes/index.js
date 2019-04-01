var express = require('express');
var router = express.Router();
var getkey = require('../scripts/getkey');
// `d306zoyjsyarp7ifhu67rjxn52tv0t20`

router.get('/getkey', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  getkey().then(key => {
    res.send({key});
  });
});

module.exports = router;
