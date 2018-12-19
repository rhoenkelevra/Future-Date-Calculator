// #####Set Today's Date #####
let today = new Date();
// Format Today's date using .toLacaleDateString
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
let todayFormated = today.toLocaleDateString("en-US", options);
document.getElementById("todayDate").textContent = todayFormated;

// ###### Setting Target Date ########

// Getting innerHTML
const inputedDate = parseInt(document.getElementById("dateInput").innerHTML);
const inputedMonth = parseInt(document.getElementById("monthInput").innerHTML);
const inputedYear = parseInt(document.getElementById("yearInput").innerHTML);

// Set the date Object from variable
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + inputedDate);

let futureMonth = new Date();
futureMonth.setMonth(futureMonth.getMonth() + inputedMonth);

let futureYear = new Date();
futureYear.setFullYear(futureYear.getFullYear() + inputedYear);

// Put dates together and Format
const dd = futureDate.getDate();
const mm = futureMonth.getMonth() + 1;
const yyyy = futureYear.getFullYear();
let dateString = dd + "/" + mm + "/" + yyyy;

// Display Result
document.getElementById('dateResult').innerHTML = dateString;
console.log(dateString);


/*
Next Step: 
- get input from user
- addEventListener on calculate button
- try to get a callback function to format date
- format like today's date
- improve UI 


*/
