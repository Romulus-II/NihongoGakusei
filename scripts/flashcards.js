module.exports.generateResults = function(missed_vocab) {
  var res = '     <table>';
  res += '\n        <tr>';
  for (var i = 0; i < missed_vocab.length; i++) {
    res += '\n          <td>';
    res += '\n            <div class="missed_flashcard">';
    if (missed_vocab.kanji) {
      res += '\n              <h2>' + missed[i].kanji + '</h2>';
      res += '\n              <p>' + missed[i].writing + '</p>';
    } else {
      res += '\n              <h2>' + missed[i].writing + '</h2>';
      res += '\n              <p>  </p>';
    }
    res += '\n              <p>' + missed[i].translation + '</p>';
    res += '\n            </div>';
    res += '\n          </td>';
  }
  res += '\n        </tr>';
  res += '\n      <table>';
};
