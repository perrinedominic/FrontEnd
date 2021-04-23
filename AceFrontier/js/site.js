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