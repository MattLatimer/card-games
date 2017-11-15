let deck = [];
let pointCards = [];
const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const getDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      const card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }
  return deck;
};

getDeck();

const contestedDeck = () => {
  for (var i = 0; i < deck.length; i++) {
    if (deck[i].Suit === 'clubs') {
      pointCards.push(deck[i]);
      deck.splice(i, 1);
      i--; //decrement i IF we remove an item
    }
  }
};

contestedDeck();

const shuffle = (cards) => {
  // for 1000 turns
  // switch the values of two random cards
  for (let i = 0; i < 1000; i++) {
    const location1 = Math.floor((Math.random() * cards.length));
    const location2 = Math.floor((Math.random() * cards.length));
    const tmp = cards[location1];

    cards[location1] = cards[location2];
    cards[location2] = tmp;
  }
};

shuffle(pointCards);

const randomSuit = suits[Math.floor(Math.random() * suits.length)];

const playerDeck = deck.filter((el) => {
  if (el.Suit === randomSuit) {
    return el;
  }
});


console.log('PLAYER DECK');
console.log(playerDeck);

// console.log('FULL DECK');
// console.log(deck);

// console.log('POINT CARDS');
// console.log(pointCards);


// console.log('SHUFFLED POINT CARDS');
// console.log(pointCards);