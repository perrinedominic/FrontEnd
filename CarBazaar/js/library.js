// Takes an array of words, and concatenates them together to form a sentence.
function ConcatArrayOfWords(words) {
    var ListOfWords = words;
    var sentence = "";

        ListOfWords.forEach(word => {
            sentence += (word + " ");
        });

    return sentence;
}

// Takes an array of words, reverses them, and concatenates them together to form a sentence.
function ConcatAndReverseArrayOfWords(words) {

}

// Checks to see if a word exists within a sentence.
function CheckForWordInSentence(sentence, word) {

}

// Tests if a number's square root is a whole number.
function TestIfSquareRootIsWholeNumber(number) {

}

// Returns the sum of an array of numbers passed-in.
function AddArrayOfNumbers(numbers) {
    var listOfNumbers = numbers;

    var sum = numbers.reduce(function(a, b)
    {
        return a + b;
    }, 0);

    return sum;
}

// Gets a random whole number between 0 and the number passed in (maxNumber).
function GetRandomInteger(maxNumber) {

}
