function displayDateTime() {
    let currentDate = new Date();
    document.getElementById("dateTime").innerHTML = currentDate;
}

function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}

function addNumbers() {
    let num1 = parseFloat(prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));
    return num1 + num2;
}

function calculator(num1, num2, operator) {
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        result = "Invalid operator";
    }
    document.getElementById("calcResult").innerHTML = result;
}

function square(num) {
    return num * num;
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function countNumbers(start, end) {
    let count = "";
    for (let i = start; i <= end; i++) {
        count += i + " ";
    }
    document.getElementById("countDisplay").innerHTML = count;
}

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}

function rectangleArea(width, height) {
    return width * height;
}

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

function longestWord(str) {
    let words = str.split(" ");
    let longest = words.reduce((a, b) => a.length > b.length ? a : b);
    return longest;
}

function countLetterOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.getElementById("circumference").innerHTML = "The circumference is " + circumference;
}

function calcArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    document.getElementById("area").innerHTML = "The area is " + area;
}