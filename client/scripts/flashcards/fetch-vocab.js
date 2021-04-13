$(document).ready( function () {
  var lesson_id = document.getElementById('indicator').innerHTML;
  var index = lesson_id.indexOf(' ');
  var len = lesson_id.length;
  url = '/vocab/lesson-' + lesson_id.substr(index+1, len);

  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: function (data) {
      vocab = data.vocab;
      startReview(vocab);
    },
    error: function (error) {
      console.log(`Error ${error}`);
    }
  });
});

$.getResults = function(missed_vocab) {
  alert("jQuery");
  var data = {missed_vocab: missed_vocab};
  var res;

  $.ajax({
    url: '/vocab/review-vocab',
    type: "GET",
    data: data,
    dataType: "json",
    success: function (data) {
      res = data.formatted_flashcards;
    },
    error: function (error) {
      console.log(`Error ${error}`);
    }
  });

  return res;
};
