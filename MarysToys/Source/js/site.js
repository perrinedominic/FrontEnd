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

// Hide and show descriptions. (P.S after I put these in I realized I couldve just used two arguements. -boden)
$(function() {
    $("#hideShow").click(function() {
        $("#laptopDescription").toggle();
    });
});

$(function() {
    $("#hideShowMouse").click(function() {
        $("#mouseDescription").toggle();
    });
});

$(function() {
    $("#hideShowCar").click(function() {
        $("#carDescription").toggle();
    });
});

$(function() {
    $("#hideShowKeyboard").click(function() {
        $("#keyboardDescription").toggle();
    });
});

$(function() {
    $("#hideShowDrone").click(function() {
        $("#droneDescription").toggle();
    });
});

$(function() {
    $("#hideShowRemote").click(function() {
        $("#remoteDescription").toggle();
    });
});

$(function() {
    $("#hideShowRobo").click(function() {
        $("#roboDescription").toggle();
    });
});

$(function() {
    $("#hideShowTablet").click(function() {
        $("#tabletDescription").toggle();
    });
});

$(function() {
    $("#hideShowWalkie").click(function() {
        $("#walkieDescription").toggle();
    });
});

$(function() {
    $("#hideShowWatch").click(function() {
        $("#watchDescription").toggle();
    });
});

// Slides a paragraph up and down.
$(document).ready(function(){
    $(".btn1").click(function(){
      $("#log").slideUp();
    });
    $(".btn2").click(function(){
      $("#log").slideDown();
    });
  });
  
  // Privious and After
  $(document).ready(function() {
    $(".next").click(function() {
        $( "li.third-item" ).next().css( "background-color", "blue" );
    });
});

function showQuote() {
    // Get a random quote from the quote array.
    var randomQuote = possibleQuotes[Math.floor(Math.random() * 10)];

    // Put the quote into the quote container element on the page.
    document.getElementById('quoteContainer').innerHTML = randomQuote;
}

$(document).ready(function() {
    $(".next").click(function() {
        $( "li.third-item" ).next().css( "background-color", "blue" );
    });
});

$(document).ready(function() {
    $(".prev").click(function() {
        $( "li.third-item" ).prev().css( "background-color", "blue" );
    });
});