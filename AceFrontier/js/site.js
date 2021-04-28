function submitContactForm()
{
    let msg = document.getElementById('emailMessage').value;
    let subject = document.getElementById('emailSubject').value;
    let name = document.getElementById('emailName').value;

    if(name != "" && msg != "" && subject != "")
    {
        window.location.href = "mailto:AceFrontier@travel.com?subject="+subject+"&body=Hi AceFrontier! My name is "+name +". %0d%0a %0d%0a"+ msg;
        alert("Your message has been emailed to us. Thank you!");
    }
    else
    {
        document.getElementById("emailError").textContent = "Please enter all fields.";
    }
}

function displayHotels()
{
   var hotelsToDispay = getData();

   hotelsToDispay.forEach(element => { 
    document.getElementById(element.id).style.display = "block"
   });
}

// Sets a session variable.
var storageKey = 'priceCompare';

function addDataToStorage(itemId) {
    
    var storage = window.sessionStorage;                
    var Hotels = [];           
    var currentHotels = getData();     

    if(storage.getItem(storageKey) !== null)
    {
       Hotels = JSON.parse(storage.getItem(storageKey));
    }
    
    if(currentHotels.length >= 3)
    {
        alert("Only three hotels can be added at a time.");
    }
    else if(checkIfHotelAdded(itemId))
    {
        var hotelToAdd = {id: itemId};
        Hotels.push(hotelToAdd);
        storage.setItem(storageKey, JSON.stringify(Hotels));
        displayHotels();
    }
 
      
}

function checkIfHotelAdded(itemId)
{
    var currentHotels = getData();
    var retVal = true;

    currentHotels.forEach(element => { 
            if(element.id === itemId)
            {
                alert("Hotel Already Added!");
                retVal = false;
            }
       });

       return retVal;
}

function getData(){
    var hotels = []; 

    if(window.sessionStorage.getItem(storageKey) !== null){
        hotels = JSON.parse(window.sessionStorage.getItem(storageKey));
    }

    return hotels;
}

function DeleteHotel(hotelID)
{
     // Gets window storage adn assigns to array toys
     var storage = window.sessionStorage;                
     var hotels = [];                
 
     // parse JSON objects into list
     hotels = JSON.parse(storage.getItem(storageKey));
 
     // Loop through list find item to delete and delete it.
     for (var i = hotels.length - 1; i >= 0; i--) 
     {
         if (hotels[i].id === hotelID) 
         { 
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


<<<<<<< HEAD
   
=======
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
>>>>>>> 2d12aa8de0f06329722b53c1cbbcd6c4e59f00d5
