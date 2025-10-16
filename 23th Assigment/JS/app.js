// // Chapter 15 (Array I)

// // 1. Declare an empty array.
// var arr = [];
// console.log(arr);

// // 2. Code an array with 1 string element
// var array = ["harry"];
// console.log(array);

// // 3. var alphabet = [h,i,j,k]. Now print the letter “j” in alert using array index

// var alphabet = ["h", "i", "j", "k",];
// alert(alphabet[2]);

// // 4. var alphabet=[“h”,”i”, “j”, “k” “l”,”m”, “n”, “o”]. Find the total length of array.

// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"];
// console.log(alphabet.length);

// // 5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.

// var alphabet = ["h"];
// alphabet[1] = "i";
// alert(alphabet[1]);

// // Chapter 16 (Array II)

// // 1. Code an array with 1 string element Add an additional element to the array using push Create an alert whose message is the last element.

// var array = ["hello"];
// array.push("world", "word");
// console.log(array);

// //2. var Alphabet=[h,i,j,k] Remove the last element from the array Alphabet.

// var alphabet = ["e", "f", "g", "h", "i", "j", "k", "l",];
// alphabet.pop();
// alphabet.pop();
// // alphabet[2] = "faraz";
// console.log(alphabet);

// // 3. var Alphabet=[h,i,j,k]Add a new element, a number, to the end of an array.

// var num = [1, 2, 3, 4, 5,];
// num.push(2, 3);
// console.log(num);

// // Chapter 16 (Array III)

// // 1. var sizes = [&quot;S&quot;, &quot;M&quot;, &quot;XL&quot;, &quot;XXL&quot;, &quot;XXXL&quot;] remove the first element of an array.

// var sizes = ["S", "Q", "U", "T", "P", "N",];
// sizes.shift();
// sizes.shift();
// console.log(sizes);

// // 2. var sizes = [S, M, XL, XXL, XXXL] add three number elements to the beginning of an array.
// var size = ["a", "b", "c", "d", "e", "f",];
// size.unshift(1, 2, 3, 4, 5, 6);
// console.log(size);

// // 3. Declare an array with one element Add a second element to the beginning of the array create an alert whose message is the new first element.

// var first_Element = ["second element"];
// first_Element.unshift("first element");
// // alert(firstElement[0]);

// // 4. var sizes = [S, M, XL, XXL, XXXL] insert L into the array between M and XL.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");
// console.log(sizes);

// // 5. var sizes = [S, M, XL, XXL, XXXL] Copy the first 3 sizes of the array and put them into a new array, regSizes.

// var sizes = ["S", "M", "XL", "XXL", "XXXL", "Q", "u", "v"];
// var regSizes = sizes.slice(3, 8);
// console.log(regSizes);

// // 6. var pets = [dog, cat, ox, duck, frog] Add 2 elements after dog and remove cat, ox, and duck.

// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1, 3, "rabbit", "hamster");
// console.log(pets);

// // var pets = ["dog", "cat", "frog"]
// // pets.splice(1, 1, "rabit")
// // console.log(pets);

// // 7. var pets = [dog, cat, ox, duck, frog]; Remove cat and ox.

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2);
// console.log(pets);

// // 8. var pets = [dog, cat, ox, duck, frog, flea]; reduce it to duck and frog using slice.

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var animals = pets.slice(3, 5);
// console.log(animals);


// let x = 10;
// if (x > 10) {
//   console.log("Greater");
// } else {
//   console.log("Smaller");
// }

// let x = 5;
// if (x > 2) {
//   if (x < 10) {
//     console.log("Inside Nested if");
//   }
// }

var first_name = [10, 20, 30];
first_name.shift()
console.log(first_name);
