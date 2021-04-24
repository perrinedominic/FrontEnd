<<<<<<< HEAD
let optionList = document.getElementById('form-control').options;
let options = [
  {
    text: 'Mountain Tours'
  },
  {
    text: 'Bus Tours'
  },
  {
    text: 'Beach Getaways'
  }
];

options.forEach(option =>
  optionList.add(
    new Option(option.text)
  )
);
=======
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

   
>>>>>>> dd972542e6647a2c737a1f4ed3289dad634481a0
