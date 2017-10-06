var wins = 0;
var losses = 0;
var guesses = 9;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerChoice = alphabet [Math.floor(Math.random() * alphabet.length)];



console.log(computerChoice);

document.onkeypress = function(event){
	var userGuess = event.key;

	if(userGuess === computerChoice){
		wins++;
		document.getElementById('win-count').innerHTML = "Wins: " + wins;
		guesses = 9;
		document.getElementById('guesses-left').innerHTML = "Guesses Left: " + guesses;
		alert("You are a Psychic!")
		
	}
	else{
		guesses--;
		document.getElementById('guesses-left').innerHTML = "Guesses Left: " + guesses;
		document.getElementById('letters-picked').append(" ", event.key);
		
	}

	if(guesses === 0) {
		losses++;
		guesses = 9;
		document.getElementById('loss-count').innerHTML = "Losses: " + losses;
		alert("Sorry, you dont have the gift!")
		
	}
};

//I could not come up with a solution to be able to reset the computer's choice following a win or a loss