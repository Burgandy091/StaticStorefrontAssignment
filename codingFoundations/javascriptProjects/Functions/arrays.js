// ARRAYS is a tablet
 
let holiday1 = "South Africa";
let holiday2 = "Brugge";
let holiday3 = "Poland";

let holiday = ["South Africa", "Brugge", "poland"];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34];
let johnSmith = [45, "New York", 3, true];

// Arrays are denoted with [] (square brackets)
//Arrays are containers that hold litst of items
//Separated itm with commas
//Can hold multiple datetypes


let fruitList = ["kiwi", "kumquat", "Oranges"];
console.log(fruitList[0], fruitList[2]);
console.log(fruitList[2]);
//console.log(fruitList[2]);

//Arrays have a starting index of 0
//Items in an array can be accessed through[]
//nameOfTheArray[indexNumber];


let foods = ["Quesadilla", "oreos", ["kiwi", "kumquat", 'Oranges']];
console.log(foods[2][1]);

//First,I need to access the location of the nested array. => [2]
//foods[2]
//Next step is to access the location of the desired item inside the array => [1]
//foods[2][1]

console.log(foods.length);
//.lenght returns the number f items in the specified arrays


//ARRAYS METHODS
let favFoods = ["Shrimp","Cookies", "ravioli", "pizza"];
favFoods.shift(); // removes the first item of the array.
favFoods.unshift("cheeseburgers"); // adds an item at the beginning of the arrays.
favFoods.pop(); // removes the last item of the array.
favFoods.push("Avocado") // add and item at the end of the arrays.
favFoods.splice(2, 0, "chocolate", "candy", "bacon") // removes (and replaces) an item in the middle of the array

console.log(favFoods, favFoods.lenght, favFoods[favFoods.length-1]); //getting the last item on the arrays list
console.log(favFoods.indexOf("pizza")) // return the index of an item in  an array

favFoods = []; //empty the array

console.log(favFoods)