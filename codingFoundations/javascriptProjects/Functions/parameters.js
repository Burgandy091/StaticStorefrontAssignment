
//  *1   *2    *3  
function hi(name) {
    console.log(`Hi ${name}!`)

};
     //4
hi('Danielle');
hi('William');
hi('Marco');



// 1:Fuction key world
//2: Fuction name - hi
//3: Parameter
//4: Argument


/// mini calculater
function add(num1, num2) {
    let sum = num1 = num2;
    console.log (sum)
};


add(5,8);
add(472,83);


//

function myName (name, last) {
    let fullName = `${name} ${last}`;
    console.log(`Hello my name is ${fullName}`)

};
 myName('John','Smith');
  
//

/// Regular Function
function tipCalc(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2);

}
console.log(tipCalc(235.76));


//Arrow Function
let totalBill = bill => {
    let tip = bill * 0.2;
    return tip.toFixed(2);
}

console.log(totalBill(235.76))

