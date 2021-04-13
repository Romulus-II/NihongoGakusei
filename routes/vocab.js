var express = require('express');
var router = express.Router();

router.get('/home', function(req, res) {
  let available_vocab_lessons = [17, 18, 19];
  res.render('flashcard-index.ejs', {vocab: available_vocab_lessons});
})

router.get('/review', function(req, res) {
  res.render('flashcards/flashcard-session.ejs', {lesson_name: 'Lesson 17'});
});

router.get('/format-missed-vocab', function(req, res) {
  let flashcard_formatter = require('./../scripts/flashcards.js');

  var formatted_flashcards = flashcard_formatter.generateResults(req.data.missed_vocab);
  res.send({formatted_flashcards: formatted_flashcards});
});

router.get('/lesson-17',function(req, res) {
  let lesson_17_vocab = require('./../vocabulary/lessons/lesson-17.json');
  res.send({vocab: lesson_17_vocab});
});

router.get('/lesson-18',function(req, res) {
  let lesson_18_vocab = require('./../vocabulary/lessons/lesson-18.json');
  res.send({vocab: lesson_18_vocab});
});


module.exports = router;
