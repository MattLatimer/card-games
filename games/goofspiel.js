let deck = [];
let pointCards = [];
const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Used in contestedDeck and playerDeck to assign random suits
const randomSuit = (suits) => {
  let suit = suits[Math.floor(Math.random() * suits.length)];
  return suit;
};

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

// Creating deck that players will bid on
const contestedDeck = () => {
  let pointDeck = randomSuit(suits);
  for (var i = 0; i < deck.length; i++) {
    if (deck[i].Suit === pointDeck) {
      pointCards.push(deck[i]);
      deck.splice(i, 1);
      i--; //decrement i IF we remove an item
    }
  }
};

contestedDeck();

// Simple card shuffle
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


// Cards assigned to each player
const playerDeck = () => {
  let playerSuit = randomSuit(suits);
  const assignedSuit = deck.filter((el) => {
    if (el.Suit === playerSuit) {
      return el;
    }
  });
  return assignedSuit;
};


const gameofSpiel = () => {
// contestedDeck.foreach((card) => {
  // if (card !== undefined) {
    // draw next card from contestedDeck;
    // let players bid;
    // compare values, winner gets the card they bid on;
    // add score to that player;
    //  
  // }
// })
};


// const playerOne = playerDeck();

// const playerTwo = playerDeck();

// console.log('PLAYER DECK');
// console.log(playerDeck());

// console.log('PLAYER ONE');
// console.log(playerOne);

// console.log('PLAYER TWO');
// console.log(playerTwo);


// console.log('FULL DECK');
// console.log(deck);

// console.log('POINT CARDS');
// console.log(pointCards);


// console.log('SHUFFLED POINT CARDS');
// console.log(pointCards);1