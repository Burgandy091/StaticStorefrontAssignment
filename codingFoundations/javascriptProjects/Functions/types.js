// Undefined and Null
// How to represent the concept of nothing

undefined;
let mySleepSchedule;
console.log(mySleepSchedule);

//Undefined means I have nothing and I have not ever been given anything.

null;
let coffeeCupContents = null;

// Null  means I am nothing because I have been told I am nthing

// If a coffee cup is undefined, it had never had coffee in it 
// If a coffee cup is null, it may have had coffee in it but now doesn't



//Booleans in JavaScript 
true;
false;
let isFull = false;
isFull = true;

// Booleans are logical true or false


//Numbers in JavaScript
let temperature = 35;
let southPoleTemperature = -20;
let bestICanDo = 3.50;
let notANumber = NaN;


//Mathematical Operators
1 + 1; //Addition
12- 10; // Subtraction
125 * 1.07; //Multiplication
125 / 4; //Division
5 ** 3; //Exponentiation (5 ^ 3)
15 % 2; //Modulus: Remainder from division


// Weird number/math behaviors
let precise = 99999999;
console.log(precise);
let rounded = 99999999;
console.log(rounded);
//Is this 0.3?
console.log(0.1 + 0.2);
console.log(1.1 * 1.1);


// Number chanllenge
/*
You are out after a dinner with friends in Indiana and the bill hits the table. It's a whopping $132.96. Instead of waiting on everyone to fumble with their phones and open a calculator app (or the friend who might solve it on a napkin), you decide you want to "flex" your newfound programming skills and show off to your friends. Everyone decides to split the bill evenly after calculating tax. A quick survey of the table shows there are 4 people. With the JavaScript knowledge you have, write out a procedure that gives everyone the correct amount to contribute toward the bill.
*/
//Indiana (sales tax), 132.96 bill, split into 5, individual contribution
// set up vatiable for key peices of infromation
let bill = 132.96;
let salesTax = 0.07;
let people = 4; 

// Calculate individual contribution to be bill
let tax = bill * salesTax;
let total = bill + tax;
let contrubution = total / people;
console.log(contrubution.toFixed(2));


//Stings in JavaScript
let userName = 'oakBibbon12';
const stateName = "Indiana";
let currentLanguage = 'JavaScrip';
let phrase = "The quick brown fox jumped over the lazy dog";
let emptyString = '';


//Escaped Characters
let escapedString = 'I just can\'t belive its\'s not butter!';
let aQuote = "The doctor said, \"No more jumping on the bed\", and they didn't!";
console.log(escapedString);

//Template Strings
let message = `Hello, my username is ${ userName }!`;
let statusMessage = `I am currently learning ${ currentLanguage }`;
console.log(message);
console.log(statusMessage);


const daysOfTheWeek = "MTWRF";
let firstDay = daysOfTheWeek[3];

//Lenght of a string
const charactersInPhrase = message.length;

//Replace All
const oldMarkup = "the Apples are the best fruit, Apples will dominate the market!";
let newMarkup = oldMarkup.replaceAll("Apples", "Oranges"); 

//Contanining a word/phrase
let stockChoices = 'AAPL, MSFT, GOOG, AMZN,FB';
let containsNetlixStock = stockChoices.includes('NFLX');


