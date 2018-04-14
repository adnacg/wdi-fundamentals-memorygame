var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log(cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("YASSS"); 
	} else {
		alert("BOO");
	}
}