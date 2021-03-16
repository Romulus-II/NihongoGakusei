var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

// Home page route
router.get('/login',function(req, res) {
	//res.sendFile(__dirname + '/client/views/index.html');
  res.render('log-in');
});

router.post('/login-request', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  console.log('Username: ' + username);
  console.log('Password: ' + password);

  //req.session.user = user;

  // We want to change this to be either success or failure, with a message
  res.send({status: 'success'});
});


module.exports = router;
