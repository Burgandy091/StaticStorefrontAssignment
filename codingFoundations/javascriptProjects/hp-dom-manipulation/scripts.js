
let listTitle = document.getElementById('list-title');

console.log(listTitle);

listTitle.style.textAlign = 'center';

let listItem = document.querySelector('ul li');

console.log(listItem);
listItem.style.color = 'purple';

//Accessing Multiple Elements

let grocery = document.getElementsByClassName('grocery-item');
console.log(grocery)
for (let item of grocery) {
    item.style.textDecoration = 'underline';
    item.style.color = "red";
    item.style.listStyleType = 'square';
}

let allListItems = document.querySelectorAll('ul li');
console.log(allListItems);

//Hooking Into Dom Events

const myButton = document.getElementById('clickme');
const myInput = document.getElementById('listInput');  


myButton.addEventListener('click', (event) => {
    console.log(event);
});

myInput.addEventListener('keyup', (event) => {
    // when a key is relased,print out the value inside of the input box
    //target is the element that fired the event
    //value is thetext inside of the targer's elements
    console.log(event.target.value);
});



//walkthrough: add items from the inputj box intothe TODO list above

let userInput = '';

myInput.addEventListener('keyup', (event) => {
    userInput = event.target.value;
});


function createNewToDo (todoText) {    
// Create a new list item
let newToDo = document.createElement('li');
// add the text to the list item 
newToDo.inerText = todoText;
// add the class 'list-item' to the new element
newToDo.classList.add('list-item');
// append that new element to the todo list
document.querySelector('#toDoDiv ul').appendChild(newToDo);

}

myButton.addEventListener('click', () => {
    createNewToDo(userInput);
});