function play(){

function createDeck() {
  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const deck = [];

  
  for (let i = 0; i < suits.length; i++) {
    
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + suits[i]);
    }
  }

  return deck;
}


function shuffel(deck)
{
  for(let i=deck.length-1;i>0;i--)
  {
  let j=Math.floor(Math.random() * (i+1));
  [deck[i],deck[j]]=[deck[j],deck[i]];
  }
}
let x=createDeck();
shuffel(x);
console.log(x.slice(0,3));
console.log(x.slice(3,6));
  document.getElementById("PlayerOne").innerText=`Player One: ${x.slice(0,3).join(', ')}`;
  document.getElementById("PlayerTwo").innerText=`Player Two: ${x.slice(3,6).join(', ')}`;
}