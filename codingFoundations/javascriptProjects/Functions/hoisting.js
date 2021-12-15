// first pass: Stores out variable declaration(essentially say "hey i know a variable of x is defined", -so let me store that in my memory so i know it is there), but does not assign them to their values. Anything that needds to be hoisted is hoisted.
// second pass: Assigns the value to out variable and executes any hoisted source code.


let name = "Finn";
console.log(name);

greet();
function greet() {
    console.log("This is hoisted")
};