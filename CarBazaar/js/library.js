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
    var number = number;

    if(isNaN(number))
    {
        result = "Passed in value is not a number.";
    }
    else
    {
        var root = Math.sqrt(number);
        var result = Number.isInteger(root);    
    }

    return result;
}

// Returns the sum of an array of numbers passed-in.
function AddArrayOfNumbers(numbers) {
    var listOfNumbers = numbers;
    var sum = 0;
    var error;
    var i = 0;
    var count = listOfNumbers.length;

    while(i < count)
    {
        if(isNaN(listOfNumbers[i]))
        {
            error = 'error';
            break;
        }
        else
        {
            sum += listOfNumbers[i]
        }

        i++;
    }

    
    if(error === undefined || error === null)
    {
        return sum;
    }
    else
    {
        return error;
    }
}

// Gets a random whole number between 0 and the number passed in (maxNumber).
function GetRandomInteger(maxNumber) {

    var result;

        if (isNaN(maxNumber) || typeof maxNumber === "boolean")
        {
            result = 'error';
        }
        else
        {
            result = Math.floor(Math.random() * maxNumber) + 1;
        }

    return result;
}

// Converts number to Dollar Amount.
function ConvertToDollar(money) {

    var moneyAmount = money;
    var string = "";
    var s = string.concat("$", moneyAmount.toString());
  
    if (isNaN(moneyAmount)) {
      alert("Only numbers can be converted to dollar amount.");
    } else {
      return s;
    }
  }

// Checks for word in a sentence.
function WordInSentence(sentence, word) {
    if (word == String) {
        word = word.toUpperCase();
        sentence = sentence.toUpperCase();
        isIncluded = sentence.includes(word);
        return isIncluded;
    } else {
        error = "The word must be a string value.";
        return error;
    }
}