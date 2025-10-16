// 1. Declare and initialize an empty multidimensional array.

let arr = [];
// 2. Declare and initialize a multidimensional array representing the following matrix:
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 3. Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Write a program to print the multiplication table of any number using a for loop. The table number & length should be taken as input from the user.
let num = prompt("Enter a number:");
let length = prompt("Enter the length of the table:");
for (let i = 1; i <= length; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// 5. Write a program to print items of the following array using a for loop:
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 6. Generate the following series in your browser.
// a. Counting
let counting = "";
for (let i = 1; i <= 15; i++) {
    counting += i + ", ";
}
console.log(counting.slice(0, -2));

// b. Reverse counting
let reverseCounting = "";
for (let i = 10; i >= 1; i--) {
    reverseCounting += i + ", ";
}
console.log(reverseCounting.slice(0, -2));

// c. Even
let even = "";
for (let i = 0; i <= 20; i += 2) {
    even += i + ", ";
}
console.log(even.slice(0, -2));

// d. Odd
let odd = "";
for (let i = 1; i <= 19; i += 2) {
    odd += i + ", ";
}
console.log(odd.slice(0, -2));

// e. Series
let series = "";
for (let i = 2; i <= 20; i += 2) {
    series += i + "k, ";
}
console.log(series.slice(0, -2));

// 7. Search for an item in an array based on user input.
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter the item you want to search for:");

if (items.includes(searchItem)) {
    console.log(`${searchItem} is found in the list.`);
} else {
    console.log(`${searchItem} is not found in the list.`);
}

// 8. Identify the largest number in the given array.
let Array = [24, 53, 78, 91, 12];
let largest = Math.max(...arr);
console.log("The largest number is:", largest);

// 9. Identify the smallest number in the given array.
let array = [24, 53, 78, 91, 12];
let smallest = Math.min(...arr);
console.log("The smallest number is:", smallest);

// 10. Print multiples of 5 ranging from 1 to 100.
for (let i = 5; i <= 100; i += 5) {
    console.log(i);
}














































































// var userInput = prompt("Enter your city name");

// var citiesArr = ["karachi", "lahore", "multan", "islamabad"];

// var flag = false;

// for (var i = 0; i < citiesArr.length; i++) {
//     if (userInput.toLowerCase() === citiesArr[i]) {
//         flag = true;
//         console.log("hire!!");
//     }
// }

// if (flag === false) {
//     console.log("not hire!!")
// }

// var arr = [];

// console.log("before arr ", arr);

// for (var i = 0; i <= 10; i++) {
//   arr.push(i);
// }

// console.log("after arr ", arr);




// var arr = ["Numbers"];

// for (var i = 0; i <= 10; i++) {
//     arr.push(i);
// }

// console.log(arr);



// var programing_lang = prompt("Enter your pro")

// var arr = [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12],
// [13, 14, 15, 16]];

// console.log(arr);




// multiplication table

// var table = prompt("Enter a number");

// var range = +prompt("Enter a lenth");

// for (var i = 1; i <= range; i++) {
//   document.write(table, " x ", i, "=", table * i, "<br>");
// }



// var city = prompt("Enter where do you live?");

// var arr = ["karachi", "lahore", "quetta"];

// for (var i = 0; i < arr.length; i++) {
//   if (city === arr[i]) {
//     console.log("hire");
//   } else {
//     console.log("not hire..");
//   }
// }



// var table_number = +prompt("Enter your table number");

// var lenth_number = +prompt("Enter your lenth number");

// for (var i = 1; i <= lenth_number; i++) {
//     document.write(table_number, " x ", i, " = ", table_number * i, "<br>")
// }



// // Array of student marks
// let studentMarks = [85, 72, 56, 98, 65, 88, 74, 91];

// // Array to store grades
// let studentGrades = [];

// // Loop through each student mark
// for (let i = 0; i < studentMarks.length; i++) {
//     let mark = studentMarks[i];

//     // Check the grade for each mark using if-else
//     if (mark >= 90) {
//         studentGrades.push('A');
//     } else if (mark >= 80) {
//         studentGrades.push('B');
//     } else if (mark >= 70) {
//         studentGrades.push('C');
//     } else if (mark >= 60) {
//         studentGrades.push('D');
//     } else {
//         studentGrades.push('F');
//     }
// }

// // Display the result
// console.log("Student Grades:");
// for (let i = 0; i < studentMarks.length; i++) {
//     console.log(`Student ${i + 1}: Marks = ${studentMarks[i]}, Grade = ${studentGrades[i]}`);
// // }


// var studentMarks = [85, 72, 56, 98, 65, 88, 74, 91];

// var studentGrades = [];

// for(var i = 0; i <= studentMarks; i++){
//     var mark = studentMarks[i];
// }