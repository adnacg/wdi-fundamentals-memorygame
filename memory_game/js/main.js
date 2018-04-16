var cards = [
	{ rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
	{ rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
	{ rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
	{ rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}
	];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	};
};

var resetBoard = function() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].setAttribute("src", "images/back.png");
	};
	cardsInPlay = [];
};

var flipCard = function() {
	if (cardsInPlay.length > 1) {
		return;
	}

	var cardId = this.getAttribute("data-id");
	var cardValue = cards[cardId].rank;
	var cardPicture = cards[cardId].cardImage;
	var cardType = cards[cardId].suit;

	//console.log("User flipped " + cardValue);

	cardsInPlay.push(cardValue);

	this.setAttribute("src", cardPicture);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

var createBoard = function() {
	document.getElementById("reset-button").addEventListener("click", resetBoard);
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	};
};

createBoard();
