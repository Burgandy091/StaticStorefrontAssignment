console.log('Hello World!');


let billAmount = 132.96;
let people = 4;

let taxAmount = billAmount * 0.07;

let total = taxAmount + billAmount;

let perPerson = total / people;

let rounded = perPerson.toFixed(2);

document.getElementyById("results").innerText = rounded;

let pTag = document.getElementyById('results');

pTag.addEventListerner('click', () => console.log('I have been pressed!'));

