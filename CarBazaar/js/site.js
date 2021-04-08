// Index.html Functions
var constellationArray = ["car", "van", "truck", "tire", "gas", "repair", "hatchback",
"headlight", "trunk", "license", "ignition", "convertible", "coupe", "sedan", "steering",
"mirror", "airbag", "engine", "battery", "transmission", "brakes", "accelerate", "clutch",
"drive", "luxury", "muffler", "savings", "satisfaction", "customer", "deals"
];
var myGame;

var textArray = ["NEWCAR5", "DISCOUNT10", "DEAL15"];
var randomNumber = Math.floor(Math.random()*textArray.length);

class Game {
constructor() {
    this.victoryCount = 0;
    this.assignNewGameVariables();
    this.updateFields();
}

assignNewGameVariables() {
    this.verificationMessage = "";
    this.guessesLeft = 11;
    this.guessedLetters = "";
    this.constellationName = this.assignWord();
    this.playerHint = this.createPlayerHint();
}

//This assigns a new word to the game for the player to guess, utilized only upon instantiation of a new game
assignWord() {
    let index = Math.floor(Math.random() * constellationArray.length);
    return constellationArray[index];
}

//This creates the hidden output for the player to reference, utilized only upon instantiation of a new game
createPlayerHint() {
    let output = "";
    for (let i = 0; i < this.constellationName.length; i++) {
        if (this.constellationName.substr(i, 1) == "-") {
            output += "-"; //Places an - inbetween words to keep in line with pictures
        } else {
            output += "_"; //Replaces the letter with an '_'
        }
        output += " " //Adds a space between '_'s
    }
    return output;
}

//This is the update of all guess information, utilized any time a NEW and APPROVED key entity is pressed
updateFields() {
    document.getElementById("wordSpan").innerHTML = this.playerHint;
    document.getElementById("guessesLeftSpan").innerHTML = "Chances Left: " + this.guessesLeft;
    document.getElementById("guessedLettersSpan").innerHTML = "Guessed Letters: " + this
        .guessedLetters;
    document.getElementById("guessFeedbackSpan").innerHTML = this.verificationMessage;
}

//This is the main function of the game, awaiting information from a key press and submitting information based on the response.
verifyInput(input) {
    if (!/[a-z]/.test(input) || input.length > 1) { //Test input against regular expression
        this.verificationMessage = "This is not an approved letter. Try again.";
    } else if (this.guessedLetters.search(input) != -
        1) { //Test input against Already Guessed Letters
        this.verificationMessage = "This letter has already been guessed.";
    } else {
        this.verificationMessage = "";
        this.guessedLetters += input + ", "
        this.compareInputWithWord(input);
        this.checkEndConditions();
    }
    this.updateFields();
}

//Compares the input value to the word and rewrites the output information
compareInputWithWord(input) {
    var newWordOutput = "";
    var adjustmentMade = false;
    for (let i = 0; i < this.constellationName.length; i++) {
        if (this.constellationName.charAt(i) ==
            input) { //If the point in the word has the input letter
            newWordOutput += input + " ";
            adjustmentMade = true;
        } else {
            newWordOutput += this.playerHint.charAt(2 * i) +
                " "; //Due to spaces, i has to be doubled to get the proper next character
        }
    }
    if (!adjustmentMade) {
        this.guessesLeft--;
    }
    this.playerHint = newWordOutput
        .toUpperCase(); //change the output to uppercase and save it back to playerHint
}

checkEndConditions() {
    if (this.guessesLeft <= 0) { //If 0 or fewer guesses left, LOSE
        document.getElementById("loserMessage").style.display = "block";
        document.getElementById("gameContainer").remove();
    } else if (this.playerHint.search("_") == -
        1) { //If There are no '_' characters in the output, WIN
        document.getElementById("winnerMessage").innerText = "Congratulations! \nUse code " + textArray[randomNumber] + " for a discount!"
        document.getElementById("winnerMessage").style.display = "block";
        document.getElementById("gameContainer").remove();
    }
}

newGame() {
    this.assignNewGameVariables();
    this.updateFields();
    document.getElementById("victoryCountSpan").innerHTML = "Victories: " + this.victoryCount;
}
}

window.addEventListener("keyup", startUp); //Start Screen
function startUp() {
myGame = new Game();
window.removeEventListener("keyup", startUp); //remove input element
window.addEventListener("keyup", function (event) { //replace input element and apply game loop.
    myGame.verifyInput(event.key.toLowerCase());
});
}


// Footer Functions
window.onload = function () {
document.getElementById("yearDisplay").innerHTML = new Date().getFullYear();

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("time").innerHTML = time;
}