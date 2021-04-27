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

   
