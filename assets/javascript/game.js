var wins = 0;
var losses = 0;
var guesses = 9;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerChoice = alphabet [Math.floor(Math.random() * alphabet.length)];


		console.log(computerChoice)

document.onkeypress = function(event){
	var userGuess = event.key;

	if(userGuess === computerChoice){
		wins++;
		
	}

	else{guesses--;

	}

	if(guesses === 0) {
		losses++
		guesses = 9
	}


document.getElementById('win-count').innerHTML = "Wins: " + wins;
document.getElementById('loss-count').innerHTML = "Losses: " + losses;
document.getElementById('guesses-left').innerHTML = "Guesses Left: " + guesses;
document.getElementById('letters-picked').innerHTML = "Your Guesses so far: " + userGuess;
}