var express = require('express');
var router = express.Router();
// EAAEqfT5ZBhe4BAK2mvViWbd1mwqfFvng9ikCHmdl1Ds4dHDn1YBzODKo4rkQaC4kj58XtnV9AWrESMHPgfqcwfE4k7YJQVAVmDl0x2BT50j6Xixozb2rUWl4GxKepFgxyEDj5MeCZBDBP4GxgEv7mHmhzFnkHZCtqz03258PIEPBlHJrIaS
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
