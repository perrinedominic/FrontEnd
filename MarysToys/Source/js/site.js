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
function addToCart(itemID, price){
    document.getElementById(itemID).remove();

    // Increment value in span element.
    var value = parseInt($(".items-in-cart").text(), 10) + 1;
    $(".items-in-cart").text(value);

    // Updates quote container to say thank you.
    showThankYouQuote();

    // Sets the cookie to store which items are in the cart.
    addData(itemID, price);
}

// Sets a session variabel.
var storageKey = 'cart';

function addData(itemId, price) {
    
    var storage = window.sessionStorage;                
    var toys = [];                

    if(storage.getItem(storageKey) !== null)
        toys = JSON.parse(storage.getItem(storageKey));

    var toyToAdd = {id: itemId, price: price};
    toys.push(toyToAdd);
    
                    
    storage.setItem(storageKey, JSON.stringify(toys));
    return toys
}

function getData(){
    var toys = []; 

    if(window.sessionStorage.getItem(storageKey) !== null){
        toys = JSON.parse(window.sessionStorage.getItem(storageKey));
    }

    return toys;
}

function displayItems(){
    var toys = getData();

    toys.forEach(element => { 
        document.getElementById(element.id).style.display = "block"

        var value = parseInt($(".items-in-cart").text(), 10) + 1;
        $(".items-in-cart").text(value);

        var price = parseInt($(".priceOfCart").text(), 10) + element.price;
        $(".priceOfCart").text(price);
        
    });
}

function checkIfcart(){
    var toys = getData();

    toys.forEach(element => { 
        document.getElementById(element.id).remove();
        
        var value = parseInt($(".items-in-cart").text(), 10) + 1;
        $(".items-in-cart").text(value);

        var price = parseInt($(".priceOfCart").text(), 10) + element.price;
        $(".priceOfCart").text(price);
    });
}

function removeToCart(itemId){
    // Gets window storage adn assigns to array toys
    var storage = window.sessionStorage;                
    var toys = [];                

    // parse JSON objects into list
    toys = JSON.parse(storage.getItem(storageKey));

    // Loop through list find item to delete and delete it.
    for (var i = toys.length - 1; i >= 0; i--) {
        if (toys[i].id === itemId) { 

            // Removes price on cart
            var price = parseInt($(".priceOfCart").text(), 10) - toys[i].price;
            $(".priceOfCart").text(price);

            toys.splice(i, 1);
        }
    }
  
    // Reset storage to the new toys array.
    storage.setItem(storageKey, JSON.stringify(toys));

    // Refresh page
    location.reload()

    return toys
}

function checkout(){
    var storage = window.sessionStorage;                
    var toys = [];                
    
    // Remove display of toys on cart.
    checkIfcart();

    // Reset storage to the balnk toys array.
    storage.setItem(storageKey, JSON.stringify(toys));

    // Display thankYouNote.
    document.getElementById("thankYouBox").style.display = "block";
    document.getElementById("thankYouNotice").textContent = "Thank you for shopping please come again!";

    // reset price box
    document.getElementById("priceOfCart").textContent = "0.00";

    // reset cart count.
    document.getElementById("items-in-cart").textContent = "0";
}