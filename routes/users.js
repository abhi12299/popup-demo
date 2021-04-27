var express = require('express');
var jwt = require('jsonwebtoken')
var router = express.Router();

router.post('/login', function(req, res) {
  try {
    const { email, password: _ } = req.body
    // perform validations and check password
    if (typeof email !== 'string') {
      res.status(400).json('Email cannot be empty!')
      return
    }
  
    const cookie = jwt.sign(email, '123')
  
    res.cookie('auth', cookie, {
      httpOnly: true,
      signed: true,
      secure: process.env.NODE_ENV === 'production'
    });
    res.json({})
  } catch (error) {
    console.error(error)
    res.json({})
  }
});

router.get('/me', function(req, res) {
  const { auth = '' } = req.signedCookies
  try {
    const email = jwt.verify(auth, '123')
    res.json({ email })
  } catch (error) {
    res.status(401).json({})
  }
})
module.exports = router;
