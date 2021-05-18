function submitContactForm() {
    let msg = document.getElementById('emailMessage').value;
    let subject = document.getElementById('emailSubject').value;
    let name = document.getElementById('emailName').value;

    if (name != "" && msg != "" && subject != "") {
        window.location.href = "mailto:AceFrontier@travel.com?subject=" + subject + "&body=Hi AceFrontier! My name is " + name + ". %0d%0a %0d%0a" + msg;
        alert("Your message has been emailed to us. Thank you!");
    } else {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailError").textContent = "Please enter all fields.";
    }
}

function displayHotels() {
    var hotelsToDispay = getData();

    hotelsToDispay.forEach(element => {
        document.getElementById(element.id).style.display = "block"
    });
}

// function for accordian
var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

// Sets a session variable.
var storageKey = 'priceCompare';

function addDataToStorage(itemId) {

    var storage = window.sessionStorage;
    var Hotels = [];
    var currentHotels = getData();

    if (storage.getItem(storageKey) !== null) {
        Hotels = JSON.parse(storage.getItem(storageKey));
    }

    if (currentHotels.length >= 3) {
        alert("Only three hotels can be added at a time.");
    } else if (checkIfHotelAdded(itemId)) {
        var hotelToAdd = {
            id: itemId
        };
        Hotels.push(hotelToAdd);
        storage.setItem(storageKey, JSON.stringify(Hotels));
        displayHotels();
    }


}

function checkIfHotelAdded(itemId) {
    var currentHotels = getData();
    var retVal = true;

    currentHotels.forEach(element => {
        if (element.id === itemId) {
            alert("Hotel Already Added!");
            retVal = false;
        }
    });

    return retVal;
}

function getData() {
    var hotels = [];

    if (window.sessionStorage.getItem(storageKey) !== null) {
        hotels = JSON.parse(window.sessionStorage.getItem(storageKey));
    }

    return hotels;
}

function DeleteHotel(hotelID) {
    // Gets window storage adn assigns to array toys
    var storage = window.sessionStorage;
    var hotels = [];

    // parse JSON objects into list
    hotels = JSON.parse(storage.getItem(storageKey));

    // Loop through list find item to delete and delete it.
    for (var i = hotels.length - 1; i >= 0; i--) {
        if (hotels[i].id === hotelID) {
            hotels.splice(i, 1);
        }
    }

    // Reset storage to the new toys array.
    storage.setItem(storageKey, JSON.stringify(hotels));

    // Update display
    location.reload();
}

if (name != "" && msg != "" && subject != "") {
    window.location.href = "mailto:AceFrontier@travel.com?subject=" + subject + "&body=Hi AceFrontier! My name is " + name + ". %0d%0a %0d%0a" + msg;
} else {
    document.getElementById("emailError").textContent = "Please enter all fields.";
}

function compare() {
    var startDt = document.getElementById("checkIn").value;
    var endDt = document.getElementById("checkOut").value;

    if (startDt > endDt) {
        alert("Check-In date cannot be after the Check-Out date");
    }
}

function getDate() {
    var today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementsByName("formDates").setAttribute("min", today);
}

function findTour() {
    var tourType = document.getElementById("tourTypes").value;

    switch (tourType) {
        case "Mountain Trek":
            document.getElementById("tourForm").action = "html/tours.html#travel";
            break;

        case "Bus Tours":
            document.getElementById("tourForm").action = "html/tours.html#busTours";
            break;

        case "Ocean Getaways":
            document.getElementById("tourForm").action = "html/tours.html#blog";
            break;

        default:
            document.getElementById("tourForm").action = "html/tours.html#countryInfo";
            break;
    }
}

function findCruise() {
    var cruise = document.getElementById("cruiseTypes").value;

    switch (cruise) {
        case "Holiday Cruise":
            document.getElementById("CruiseForm").action = "html/cruise.html";
            break;

        case "Glacier Cruise":
            document.getElementById("CruiseForm").action = "html/cruise.html";
            break;

        case "Anniversary Cruise":
            document.getElementById("CruiseForm").action = "html/cruise.html";
            break;
    }
}

function findTourVersionTwo() {
    var tourType = document.getElementById("tourTypes").value;

    switch (tourType) {
        case "Mountain Trek":
            document.getElementById("tourForm").action = "#travel";
            break;

        case "Bus Tours":
            document.getElementById("tourForm").action = "#busTours";
            break;

        case "Ocean Getaways":
            document.getElementById("tourForm").action = "#blog";
            break;

        default:
            document.getElementById("tourForm").action = "#countryInfo";
            break;
    }
}

function getHotel() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const location = urlParams.get('hotelLocations');

    var hotelLocation = location;
    switch (hotelLocation) {
        case "Chicago, USA":
            document.getElementById("singaporeHotel").setAttribute("style", "display: none;");
            document.getElementById("yerevanHotel").setAttribute("style", "display: none;");
            document.getElementById("dubaiHotel").setAttribute("style", "display: none;");
            document.getElementById("laHotel").setAttribute("style", "display: none;");
            document.getElementById("dunamarHotel").setAttribute("style", "display: none;");
            break;

        case "Singapore":
            document.getElementById("chicagoHotel").setAttribute("style", "display: none;");
            document.getElementById("yerevanHotel").setAttribute("style", "display: none;");
            document.getElementById("dubaiHotel").setAttribute("style", "display: none;");
            document.getElementById("laHotel").setAttribute("style", "display: none;");
            document.getElementById("dunamarHotel").setAttribute("style", "display: none;");
            break;

        case "Yerevan, Armenia":
            document.getElementById("chicagoHotel").setAttribute("style", "display: none;");
            document.getElementById("singaporeHotel").setAttribute("style", "display: none;");
            document.getElementById("dubaiHotel").setAttribute("style", "display: none;");
            document.getElementById("laHotel").setAttribute("style", "display: none;");
            document.getElementById("dunamarHotel").setAttribute("style", "display: none;");
            break;

        case "Dubai, UAE":
            document.getElementById("chicagoHotel").setAttribute("style", "display: none;");
            document.getElementById("yerevanHotel").setAttribute("style", "display: none;");
            document.getElementById("singaporeHotel").setAttribute("style", "display: none;");
            document.getElementById("laHotel").setAttribute("style", "display: none;");
            document.getElementById("dunamarHotel").setAttribute("style", "display: none;");
            break;

        case "Los Angeles, USA":
            document.getElementById("chicagoHotel").setAttribute("style", "display: none;");
            document.getElementById("yerevanHotel").setAttribute("style", "display: none;");
            document.getElementById("dubaiHotel").setAttribute("style", "display: none;");
            document.getElementById("singaporeHotel").setAttribute("style", "display: none;");
            document.getElementById("dunamarHotel").setAttribute("style", "display: none;");
            break;

        case "Cancún, Mexico":
            document.getElementById("chicagoHotel").setAttribute("style", "display: none;");
            document.getElementById("yerevanHotel").setAttribute("style", "display: none;");
            document.getElementById("dubaiHotel").setAttribute("style", "display: none;");
            document.getElementById("laHotel").setAttribute("style", "display: none;");
            document.getElementById("singaporeHotel").setAttribute("style", "display: none;");
            break;

        default:
            break;
    }

    window.history.replaceState(null, null, window.location.pathname);
}

setInterval(function() {
    var item = adList[Math.floor(Math.random() * adList.length)];
    displayAdWindow();
    changeAd(item);
}, 300000);


var adList = ['https://www.youtube.com/embed/7LVIikCr2rI?autoplay=1&mute=1', 'https://www.youtube.com/embed/WLIv7HnZ_fE?autoplay=1&mute=1', 'https://www.youtube.com/embed/EnX1wLPjxVw?autoplay=1&mute=1', 'https://www.youtube.com/embed/JJPvNS0FrAQ?autoplay=1&mute=1'];

function displayAdWindow()
{
    document.getElementById('adWindow').style.display = "block";
}

function changeAd(url)
{
    document.getElementById('adVideo').src = url;
}

function removeAdWindow()
{
    document.getElementById('adWindow').style.display = 'none';
}