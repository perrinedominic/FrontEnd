function submitContactForm() {
    let msg = document.getElementById('emailMessage').value;
    let subject = document.getElementById('emailSubject').value;
    let name = document.getElementById('emailName').value;

    if (name != "" && msg != "" && subject != "") {
        window.location.href = "mailto:AceFrontier@travel.com?subject=" + subject + "&body=Hi AceFrontier! My name is " + name + ". %0d%0a %0d%0a" + msg;
    } else {
        document.getElementById("emailError").textContent = "Please enter all fields.";
    }
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