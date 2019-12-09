var express = require('express');
var router = express.Router();

/* redirect to the new index page that we've created at
  the path '/catalog' */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

module.exports = router;
