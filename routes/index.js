var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Popup Login Demo' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' })
})

module.exports = router;
