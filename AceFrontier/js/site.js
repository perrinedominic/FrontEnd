function submitContactForm()
{
    let msg = document.getElementById('emailMessage').value;
    let subject = document.getElementById('emailSubject').value;
    let name = document.getElementById('emailName').value;

    if(name != "" && msg != "" && subject != "")
    {
        window.location.href = "mailto:AceFrontier@travel.com?subject="+subject+"&body=Hi AceFrontier! My name is "+name +". %0d%0a %0d%0a"+ msg;
    }
    else
    {
        document.getElementById("emailError").textContent = "Please enter all fields.";
    }
}

function compare()
{
    var startDt = document.getElementById("checkIn").value;
    var endDt = document.getElementById("checkOut").value;

    if( (new Date(startDt).getTime() < new Date(endDt).getTime()))
    {
        alert("Check-In date cannot be after the Check-Out date");
    }

    alert(startDt);
}