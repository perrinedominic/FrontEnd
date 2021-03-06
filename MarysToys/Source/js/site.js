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

// An array for holding the thank you quotes.
var thankYouQuotes = [
    'Thank you for shopping with us!',
    'We appreciate your business!',
    'Recommend us to your friends and family!',
    'Check back often for offers and special deals!',
    'Thank you for your purchase!'
];

// Hide and show descriptions. (P.S after I put these in I realized I couldve just used two arguements. -boden)
$(function() {
    $("#hideShow").click(function() {
        $("#laptopDescription").slideToggle();
    });
});

$(function() {
    $("#hideShowMouse").click(function() {
        $("#mouseDescription").slideToggle();
    });
});

$(function() {
    $("#hideShowCar").click(function() {
        $("#carDescription").slideToggle();
    });
});

$(function() {
    $("#hideShowKeyboard").click(function() {
        $("#keyboardDescription").slideToggle();
    });
});

$(function() {
    $("#hideShowDrone").click(function() {
        $("#droneDescription").slideToggle();
    });
});

$(function() {
    $("#hideShowRemote").click(function() {
        $("#remoteDescription").slideToggle();
    });
});

$(function() {
    $("#hideShowRobo").click(function() {
        $("#roboDescription").slideToggle();
    });
});

$(function() {
    $("#hideShowTablet").click(function() {
        $("#tabletDescription").slideToggle();
    });
});

$(function() {
    $("#hideShowWalkie").click(function() {
        $("#walkieDescription").slideToggle();
    });
});

$(function() {
    $("#hideShowWatch").click(function() {
        $("#watchDescription").slideToggle();
    });
});

function showQuote() {
    // Get a random quote from the quote array.
    var randomQuote = possibleQuotes[Math.floor(Math.random() * 10)];

    // Put the quote into the quote container element on the page.
    document.getElementById('quoteContainer').innerHTML = randomQuote;
}

function showThankYouQuote() {
    // Get a random quote from the quote array.
    var thankYouQuote = thankYouQuotes[Math.floor(Math.random() * 5)];

    // Put the quote into the quote container element on the page.
    document.getElementById('quoteContainer').innerHTML = thankYouQuote;
    document.getElementById('quoteContainer').style.fontWeight = "bold";
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


// Adds items to cart and removes from the toys page
function addToCart(itemID){
    document.getElementById(itemID).remove();

    // Increment value in span element.
    var value = parseInt($(".items-in-cart").text(), 10) + 1;
    $(".items-in-cart").text(value);

    // Updates quote container to say thank you.
    showThankYouQuote();

    // Sets the cookie to store which items are in the cart.
    setCookie("itemID", itemID, 1);
}

// Sets a user cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}