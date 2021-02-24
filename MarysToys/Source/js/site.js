// Get a random quote from the array list to display.
$(document).ready(function () {
    showQuote();
});

// An array holding all of the possible header quotes.
var possibleQuotes = [
    'What a great day to buy toys!',
    'We sell toys - it\'s what we do!',
    'If you came here to by cookies, you came to the wrong place...',
    'Oh happy day!',
    'Mary says Legos are the best!',
    'Toy stores make everyone happy.',
    'There are toys for all ages.',
    'So many toys - So little time.',
    'Here its playtime all the time!',
    'You can never have enough toys!'
];

function showQuote() {
    // Get a random quote from the quote array.
    var randomQuote = possibleQuotes[Math.floor(Math.random() * 10)];

    // Put the quote into the quote container element on the page.
    document.getElementById('quoteContainer').innerHTML = randomQuote;
}

// Hide and show navbar
$(function() {
    $("#hideShow").click(function() {
        $("#quoteContainer").toggle();
    });
});


$(document).ready(function(){
    $(".btn1").click(function(){
      $("#log").slideUp();
    });
    $(".btn2").click(function(){
      $("#log").slideDown();
    });
  });