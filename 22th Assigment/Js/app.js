// Chapter 10 (if statements)

// 1. var city = &quot;Karachi&quot; if (city = &quot;Karachi&quot;) { console.log(&quot;The City
// OF Lights&quot;) Correct the above statement:
// Also try this statement by yourself

// var city = prompt("Enter your city");

// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to karachi");
// }

// else {
//     alert("Get out");
// }


//2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.

// var x = 10;

// var x = 10;

// var y = 10;

// if (x === y) {
//     var z = prompt("Please enter the value of z?");
//     alert(z);
// }

// else {
//     alert("Undefined");
// }


//3. Code an if statement that tests if ZipCode is &quot;10010&quot; so, Alert
// that &quot;Karachi&quot;. if not then alert (&quot;Please write correct city&quot;)

// var ZipCode = "10010";

// if (ZipCode === "10010") {
//     alert("karachi")
// }

// else {
//     alert("Please write correct city");
// }


//4. Code an if statement. Test whether a variable has a particular numerical value.
// If so, assign a new value to that variable, as in x = 1;

// var x = 1;

// if (x === 1) {
//     x = 10;
// }

// console.log(x);



// Chapter 11 (Comparison Operators)

// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)

//. !== ka istemal:
//. !== ek operator hai jo check karta hai ki kya do values barabar nahi hain.
//. Agar do values unequal hain, toh yeh true hota hai.
//. Agar do values barabar hain, toh yeh false hota hai.

// var x = 10;
// var y = 10;

// if (x !== y) {
//     massege=("x aur y unequal hain");
// }

// else {
//     massege=("x aur y barabar hain");
// }

// alert(massege);

//2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.

// Explanation:
// x >= y: Yeh condition check karegi ki kya x ki value y se bari ya barabar hai.
// Agar x ki value y se bari ya barabar hoti hai, toh condition true ho jayegi.
// Agar x ki value y se chhoti hoti hai, toh condition false ho jayegi.

// var x = 10;
// var y = 8;

// if (x >= y) {
//     massege = ("Ye baraber hain");
// }

// else {
//     massege = ("ye baraber nhi hain")
// }

// alert(massege);




// Task 1: ZipCode Comparison

// var ZipCode = prompt("Enter your zipcode");

// if (ZipCode === "10010") {
//     alert("Karachi");
// }

// else if (ZipCode === "20020") {
//     alert("Lahor");
// }

// else {
//     alert("Please enter correct ZipCode.")
// }



var firstName = prompt("Enter your name");

if (firstName.toLowerCase() =="ahmed"){

    alert("Welcome Ahmed");
}

else {
    alert("Name not recognized");
}



















































// chapter no 9 (prompt)

// var firstName = prompt("Enter your first name");

// var lastName = prompt("Enter your last name");

// console.log(firstName, lastName);

// var firstNum = +prompt("Enter your first number");

// var SecondNum = +prompt("Enter your second number");

// console.log(firstNum + SecondNum);




// // assignment (multiplication table)

// var number = +prompt("Enter a number to generate multiplication table");

// document.write(
//   number,
//   " x 1 = ",
//   number * 1,
//   "<br>",
//   number,
//   "x 2 = ",
//   number * 2,
//   "<br>",
//   number,
//   "x 3 = ",
//   number * 3,
//   "<br>",
//   number,
//   "x 4 = ",
//   number * 4,
//   "<br>",
//   number,
//   "x 5 = ",
//   number * 5,
//   "<br>",
//   number,
//   "x 6 = ",
//   number * 6,
//   "<br>",
//   number,
//   "x 7 = ",
//   number * 7,
//   "<br>",
//   number,
//   "x 8 = ",
//   number * 8,
//   "<br>",
//   number,
//   "x 9 = ",
//   number * 9
// );

// // if

// // else

// var number = 100;

// if (number === 100) {
//   console.log("correct..");
// }

// // true
// // false

// // boolean value

// if (false) {
//   console.log("if block run");
// }

// // ==  "10" == 10    true

// // ===  "10" === 10  false


// var number = "100";

// if (number === 100) {
//   console.log("correct");
// }

// var age = +prompt("Enter your age");

// if (age >= 18) {
//   console.log("you are eligible for CNIC");
// } else {
//   console.log("you are not eligible for CNIC");
// }


// var city = prompt("Enter where do you live?");

// if (city.toLowerCase() == "karachi")
//     {

//   console.log("Welcome..");

// }
// else {
//   console.log("get out..");
// }


// var num1 = 10;

// console.log(num);



// var gender = prompt("Enter your gender");
// var message;

// if (gender === "male") {
//   message = "Welcome Sir...";
// } else if (gender === "female") {
//   message = "Welcome Maam...";
// } else {
//   message = "incorrect value...";
// }

// console.log(message);


// // ! toggle


// if (!false) {
//   console.log("if block run..");
// } else {
//   console.log("else block run..");
// }


// var yourTicketNumber = 14515;

// if (yourTicketNumber !== 487208) {
//   console.log("enter please");
// } else {
//   console.log("better luck next time");
// }



// var number = "";

// var number = 2;

// console.log(number + number - number + number);




// // chapter 13 (testing set of conditions)


// // logical operator


// // &&   And operator

// // ||   Or operator

// // age >= 18 || weight >= 90




// var age = +prompt("Enter your age");

// var weight = +prompt("Enter your weight");

// var city = prompt("Enter your city");

// if ((age >= 18 || weight >= 90) && city == "karachi") {
//   console.log("join now..");
// } else {
//   console.log("next time..");
// }



// // assignment Question



// var subject1 = prompt("enter subject 1 name");
// var subject2 = prompt("enter subject 2 name");
// var subject3 = prompt("enter subject 3 name");

// var subject1_Marks = +prompt("Enter 1 subject marks");
// var subject2_Marks = +prompt("Enter 2 subject marks");
// var subject3_Marks = +prompt("Enter 3 subject marks");

// var totalMarks = 100;

// var obtainedMarks = subject1_Marks + subject2_Marks + subject3_Marks;

// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write(
//   "<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></table>"
// );