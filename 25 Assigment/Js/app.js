// 1. Write a program that displays current date and time inyour browser.

// var date = new Date();
// console.log(date);

// 2. Write a program that alerts the current month in words.
// For example December.

let currentDate = new Date();
let monthName = currentDate.toLocaleString('default', { month: 'long' });
alert("Aaj ka mahina hai: " + monthName);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

let todays = new Date();
let days = todays.toLocaleString('default', { weekday: 'short' });
alert(days);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// let today = new Date();
// let day = today.getDay();

// if (day === 0 || day === 6) {
//   alert("It's Fun day");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// let today = new Date();
// let date = today.getDate();

// if (date < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// let now = new Date();
// let minutesSinceEpoch = Math.floor(now.getTime() / 60000);
// alert(minutesSinceEpoch);

// 7. Test whether it's AM or PM:

// let today = new Date();
// let hours = today.getHours();

// if (hours < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


// 8. Create a Date object for the last day of the last month of 2020:

let laterDate = new Date(2020, 11, 31);  // Month is zero-indexed, so 11 is December
alert(laterDate);

// 9. Create a Date object for 1st Ramadan (June 18, 2015) and calculate the number of days since then:

// let ramadanStart = new Date(2015, 5, 18);  // June 18, 2015 (Month is zero-indexed)
// let today = new Date();
// let timeDifference = today - ramadanStart;  // Time difference in milliseconds
// let daysPast = Math.floor(timeDifference / (1000 * 3600 * 24));  // Convert to days
// alert(daysPast + " days have passed since 1st Ramadan.");

// 10. Display the seconds that elapsed between the reference date and the beginning of 2015:

let startOf2015 = new Date(2015, 0, 1);  // January 1, 2015
let now = new Date();
let secondsElapsed = Math.floor((now - startOf2015) / 1000);  // Convert to seconds
alert("Seconds elapsed since the beginning of 2015: " + secondsElapsed);

// 11. Create a Date object for the current date, extract the hours, reset the date object an hour ahead, and display it:

// let today = new Date();
// let hours = today.getHours();
// today.setHours(hours + 1);  // Set the time 1 hour ahead
// alert(today);

// 12. Create a Date object and show the date 100 years back:

let today = new Date();
let hundredYearsAgo = new Date(today.setFullYear(today.getFullYear() - 100));
alert(hundredYearsAgo);

// 13. Calculate and show the birth year based on user's age:

let age = prompt("Please enter your age:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
alert("You were born in " + birthYear);

// 14. Generate a K-Electric bill:

let customerName = prompt("Enter your name:");
let currentMonth = new Date().toLocaleString('default', { month: 'long' });
let numberOfUnits = parseFloat(prompt("Enter number of units:"));
let chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
let latePaymentSurcharge = 100;  // Example late payment surcharge

let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
let grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

alert("Customer Name: " + customerName);
alert("Current Month: " + currentMonth);
alert("Number of Units: " + numberOfUnits);
alert("Charges per Unit: " + chargesPerUnit);
alert("Net Amount Payable (within Due Date): " + netAmountPayable);
alert("Late Payment Surcharge: " + latePaymentSurcharge);
alert("Gross Amount Payable (after Due Date): " + grossAmountPayable);