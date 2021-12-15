
// Create a funtion that says good morning 


function greet (greeting, name) {
    return `${greeting} ${name}`  /// local scope only live in this code  //// coffee analagy
};
console.log(greet ("Oh hi","Mark"));


///
// challenge 2
// create counting 0 to 100

   //   
for(let i = 0; i <= 100; i++) {
    if(i % 3 === 0  && i % 5 === 0 ){   // ( i % 15 === 0) // STRICTEST CONDITION FIRST
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0 ){     
        console.log("Fizz")
    } else {
        console.log(i);
    }
}

