var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	};
};

var flipCard = function(cardId) {
	var cardValue = cards[cardId];
	console.log("User flipped " + cardValue);

	cardsInPlay.push(cardValue);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);





/*
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/