// CHAPTER 6 (MATH EXPRESSION II)

//1. Code a short form of 
x = x + 1;
// You can shorten the expression using the increment operator ++:
x++;  // Equivalent to x = x + 1;

//2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?

// You can decrement x using the -- operator:
x--;  // Decreases x from 100 to 99

//3. var x = 50; var y = x++; What is the value of y?
// . In this case, y gets the value of x before the increment, because x++ is a post-increment. So, y will be assigned the original value of x, which is 50, before x is incremented.

y = 50;  // y is 50, x is now 51

//4. var y = 50; var z = --y; What is the value of z?
// --y is a pre-decrement operator, so y is first decremented to 49, and then the new value of y is assigned to z. So, z will be 49.
z = 49;  // y is 49, z is also 49

//5. In a single statement, decrement num and assign its original value to newNum.
//. You can use the post-decrement operator num--:
// var newNum = num--;  // newNum gets the original value of num, then num is decremented

//6. In a single statement, add 1 to a variable and assign its original value to another variable.
//. You can use the post-increment operator x++:
var newVar = x++;  // newVar gets the original value of x, then x is incremented by 1

//7. Assign a number value to a variable. Increment the variable. Display the new value in an alert.
//. First assign a number to the variable, increment it, and then display it with alert:
var x = 10;  // Assign a number value
x++;  // Increment x by 1
alert(x);  // Display the new value (11) in an alert



// CHAPTER 7 (MATH EXPRESSION III)

//1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?
//. According to the order of operations (PEMDAS), multiplication is performed first, so 2 * 6 = 12. Then, add 2 + 12 = 14.

calculatedNum = 14;  // Value of calculatedNum is 14

//2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?
//. Parentheses are calculated first, so 2 + 2 = 4. Then, 4 * 6 = 24.

calculatedNum = 24;  // Value of calculatedNum is 24

//3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?
//. First, calculate the values inside each set of parentheses: (2 + 2) = 4 and (4 + 2) = 6. Then, multiply 4 * 6 = 24.

calculatedNum = 24;  // Value of calculatedNum is 24

//4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?
//. First, calculate inside the parentheses: (2 + 2) = 4. Then multiply 4 * 4 = 16, and finally, add 16 + 2 = 18.

calculatedNum = 18;  // Value of calculatedNum is 18

//5. Now, for the more complex questions:
//. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
//  To get 56, use parentheses to force the order of operations:

var cost = (2 + 2) * (4 + 10);  // (2 + 2) = 4, (4 + 10) = 14, then 4 * 14 = 56
console.log(cost);


//6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
//. To get 20, you need to ensure the multiplication happens before the addition:

var units = 2 + (2 * 4) + 10;  // 2 * 4 = 8, then 2 + 8 + 10 = 20
console.log(units);


//7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
//.  To get 5, calculate division first, then multiplication:

var pressure = (4 / 2) * 4;  // 4 / 2 = 2, then 2 * 4 = 8
console.log(pressure);



// CHAPTER 8 (CONCENATING TEXT STRINGS)

//1. var num = "2" + "2"; What is the value of num? (Include quotation marks.)
//. In JavaScript, when you use the + operator with strings, they are concatenated. Therefore, "2" + "2" results in "22".
num = "22";  // Value of num is "22"

//2. message = ("Hello," + "Dolly"); What is the value of message? (Include the quotation marks.)
//. The + operator concatenates the strings "Hello," and "Dolly", resulting in "Hello,Dolly".
message = "Hello,Dolly";  // Value of message is "Hello,Dolly"

// Alert the statement:
alert("Hello,Dolly");  // Displays the alert with the message "Hello,Dolly"

//3. alert("33" + 3); What message displays in the alert box?
//. When you concatenate a string "33" with a number 3, the number is automatically converted to a string and the result is "333".

alert("333");  // The alert displays "333"

//4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
//. You can break the phrase into two strings and concatenate them in the alert.

alert("Pakistan" + " Zindabad");  // Displays the alert with the message "Pakistan Zindabad"

//5. Write a statement that assigns to a variable the concatenation of a string with a number.
//. Here's an example of concatenating a string with a number:

var result = "Number: " + 42;  // Concatenates the string "Number: " with the number 42, resulting in "Number: 42"

// 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.
//. Here's how you can assign strings to two variables and concatenate them:

var str1 = "Hello";
var str2 = "World";
var concatenatedResult = str1 + " " + str2;  // Concatenates "Hello" and "World" with a space in between, result



// CHAPTER 9 (PROMTS)

//1. Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
var firstName = prompt("Enter first name");

//2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
var country = prompt("Country?", "China");

//3. Correct this statement var yourName = prompt(Enter Your Name");
// The correct syntax is to properly close the quotation marks and use correct string formatting:
var yourName = prompt("Enter Your Name");

//4. Code a prompt that specifies a string as the message. Include a default input.
var response = prompt("Enter your favorite color", "Blue");

//5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.

var message = "What is your favorite fruit?";
var defaultResponse = "Apple";
var userResponse = prompt(message, defaultResponse);

//6. Display a prompt, including both a message and a default response. Display the user's response in an alert.

var city = prompt("Enter the name of your city", "New York"); alert("You entered: " + city);
var color = prompt("Color");

// alert("Your color is " + color);