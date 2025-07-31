function play(){//first lets create a deck i.e pack of all 52 cards.

function createDeck() {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck = [];

  // Loop through suits 
  for (let i = 0; i < suits.length; i++) {
    // Loop through first suit and values 
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + suits[i]);//now deck stores all the 52 cards as an array one by one
    }
  }

  return deck;
}


function shuffel(deck)//array lai spread gareko ho
{
  for(let i=deck.length-1;i>0;i--)
  {
  let j=Math.floor(Math.random() * (i+1));
  [deck[i],deck[j]]=[deck[j],deck[i]];//destructing array like swaping 
  }
}
let x=createDeck();
shuffel(x);
console.log(x.slice(0,3));//firstdeck
console.log(x.slice(3,6));//second deck
  document.getElementById("PlayerOne").innerText=`Player One: ${x.slice(0,3).join(', ')}`;
  document.getElementById("PlayerTwo").innerText=`Player Two: ${x.slice(3,6).join(', ')}`;
}