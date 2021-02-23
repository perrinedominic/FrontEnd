$(document).ready(function () {
    showQuote();
});

// An array holding all of the possible header quotes.
var possibleQuotes = [
    'What a great day to buy toys!',
    'We sell toys - it\'s what we do!',
    'If you came here to by cookies, you came to the wrong place...',
    'Oh happy day!',
    'Mary says Legos are the best!'
];

function showQuote() {
    // Get a random quote from the quote array.
    var randomQuote = possibleQuotes[Math.floor(Math.random() * 10)];

    // Put the quote into the quote container element on the page.
    document.getElementById('quoteContainer').innerHTML = randomQuote;
}