var express = require('express');
var router = express.Router();

// Home page route
router.get('/lesson-18',function(req, res) {
  let lesson_18_vocab = require('./../vocabulary/lessons/lesson-18.json');
  console.log(lesson_18_vocab);
	//res.sendFile(__dirname + '/client/views/index.html');
  //res.render('flashcard-session.ejs', {vocab: lesson_18_vocab});
});


module.exports = router;
