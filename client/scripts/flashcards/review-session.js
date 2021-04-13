class ReviewSession {
  constructor(vocab) {
    this.vocab = vocab;
    this.completed_vocab = [];
    this.missed_vocab = [];
  }

  markForReview(card) {
    this.missed_vocab.push(card);
  }

  prepCard() {
    if (this.vocab.length < 4) {
      alert(this.vocab.length + ' cards left');
    }
    if (this.vocab.length == 0) {
      alert('We are out of cards!!!');
      return;
    }
    var cards = [];
    var correct_card_found = false;
    var correct_card_index;
    var correct_card;
    console.log('Drawing new cards');
    console.log(this.vocab.length);
    console.log(this.completed_vocab.length);
    if (this.completed_vocab.length > this.vocab.length) {
      //alert('Pulling cards from completed_vocab list');
      var num_cards_needed = 2;
      if (this.vocab.length < 2) { num_cards_needed++; }
      while (cards.length < num_cards_needed) {
        var random_index = Math.floor(Math.random() * this.completed_vocab.length);
        if (!cards.includes(this.completed_vocab[random_index])) {
          cards.push(this.completed_vocab[random_index]);
        }
      }
    }
    console.log(cards.length);
    while (cards.length < 4) {
      var random_index;
      if (this.vocab.length > 1) {
        random_index = Math.floor(Math.random() * this.vocab.length);
      } else {
        random_index = 0;
      }
      if (!cards.includes(this.vocab[random_index])) {
        cards.push(this.vocab[random_index]);
        if (!correct_card_found) {
          correct_card = this.vocab[random_index];
          if (this.completed_vocab.includes(correct_card)) {
            alert('WE ALREADY USED THIS CARD!!!');
          }
          console.log(correct_card.writing);
          this.completed_vocab.push(correct_card);
          correct_card_found = true;
          if (this.vocab.length > 0) {
            this.vocab[random_index] = vocab.pop();
          }
        }
      }
    }
    console.log(cards);
    cards = this.shuffle(cards);
    correct_card_index = cards.indexOf(correct_card);
    return {index: correct_card_index, cards: cards};
  }

  /**
   * Shuffles array in place.
   * @param {Array} a items An array containing the items.
   */
  shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
  }
}
