// Setting Today's Date

let today = new Date();
let options = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};
let todayFormated = today.toLocaleDateString('en-US', options);
 document.getElementById('todayDate').textContent = todayFormated;

/*var dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
*/

// Setting Target Date
// Getting innerHTML
const inputedDate = parseInt(document.getElementById('dateInput').innerHTML);
const inputedMonth = parseInt(document.getElementById('monthInput').innerHTML);
const inputedYear = parseInt(document.getElementById('yearInput').innerHTML);

let futureDate = new Date();
futureDate = futureDate.setDate(futureDate.getDate()+ inputedDate);

let futureMonth = new Date();
futureMonth = futureMonth.setMonth(futureMonth.getMonth + inputedMonth);



let targetDate = new Date();
const dd = targetDate.getDate();
const mm = targetDate.getMonth() + 1;
const yyyy = targetDate.getFullYear();
let dateString = dd + '/' + mm + '/' + yyyy;

console.log(dateString)
//console.log(futureDateFormated);
// trying to get a callback function to formate date 
//function formatDate(date,)

