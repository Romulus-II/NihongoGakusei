let gui_prompt = document.getElementById('main-flashcard');
let gui_answers = document.getElementById('answers');
var review_session;

var cards = [];
var correct_card_index = 0;

function checkAnswers(index) {
  if (cards[index] != cards[correct_card_index]) {
    review_session.markForReview(cards[correct_card_index]);
  }
  if (review_session.vocab.length > 0) {
    presentCard();
  } else {
    finishReview();
  }
}

function finishReview() {
  gui_prompt.style.display = 'none';
  gui_answers.style.display = 'none';
  alert('Finished review session');
  if (review_session.missed_vocab.length > 0) {
    gui_review = document.getElementById('missed_vocab');
    gui_review.style.display = 'in-line block';
    var res = $.getResults(review_session.missed_vocab);
    gui_review.innerHTML = res;
  }
}

function presentCard() {
  if (!review_session.vocab.length == 0) {
    cards = [];
    res = review_session.prepCard();
    cards = res.cards;
    correct_card_index = res.index;

    var flashcard;
    if (cards[correct_card_index].kanji) {
      flashcard = '<h2>' + cards[correct_card_index].kanji + '</h2>' +
          '<p>' + cards[correct_card_index].writing + '</p>';
    } else {
      flashcard = '<h2>' + cards[correct_card_index].writing + '</h2>' + '<p> </p>';
    }
    gui_prompt.innerHTML = flashcard;

    answers = '';
    for (var i = 0; i < cards.length; i++) {
      answers += '<button onclick="checkAnswers(' + i + ')">' + cards[i].translation + '</button> \n';
    }
    gui_answers.innerHTML = answers;
  } else {
    finishReview();
  }
}

function startReview(vocab) {
  review_session = new ReviewSession(vocab);

  presentCard();
}
