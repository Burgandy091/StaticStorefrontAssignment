let weather = 75;

if(weather < 70) {
    console.log('Wear a jacket.')
} else {
    console.lon('No jacket needed.')
};


let name = 'Danielle';

if (name === 'Danielle') {
    console.log(`Hello, my name is ${name}!`)
} else {
    console.lon('Hello what is your name?')
};

///// *BRONZE SOLUTION
let name = 'ZachARy';   //setting up the code methord
console.log(name);
console.log(name[0]);
console.log(name[0].toUpperCase());

/// z === Z 
if (name[0] === name[0].toUpperCase()) {
    console.log(name)
} else {
    console.log('Hey that sting is not written correctly')
};


// * BRONZE SOLUTION

let name = "ZachARy";

console.log(name.slice(1));    //postion 1 
console.log(name.slice(1).toLowerCase()) /// position 

if (name[0]===name[0].toUpperCase()) {
    console.log(name[0])
} else {
    console.log(name.slice(1).toLowerCase())
};

// *GOLDE SOLUTION

let name = "ZachARy";

console.log(name.slice(1));    //postion 1 
console.log(name.slice(1).toLowerCase()) /// position 

if (name[0]===name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase()
    console.log("#1", isUppercase)
} else {
    let notUppercase = name[0].toUpperCase() + name.slice(1).toLowecaser()
    console.log("#2", toLowerCase);

};



let age = 19;

if (age >= 18) {
    console.log("Yay, you can vote!");
} else if (age >= 21) {
    console.log("Yay, you can drink!");
} else if (age >=25) {
    console.log("Yay, you can rent a car!");
} else {
    console.log("You are too yound to d anything fun.");
};