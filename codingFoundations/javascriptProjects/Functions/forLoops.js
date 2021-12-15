
/// part 1    // 2     // 3  
for (let i = 0; i < 10; i ++){
    console.log(i)
}


// 1: Initial Expression (starting point)
// 2: Condition (stopping point - whenever the condition is met loop will stop)
// 3: Increment Expressioin (how much the loop variaible will increases or derease each interation) //

for (let i = 0; <= 20; i += 2){
    console.log(i)
}

for (let i =20; i >= 0; i -= 2)
console.log(i)
for (let i = 10; i >= 0; i --){
    console.log(i)

}
let name = "Danielle"
console.log(name.length)
for (let i = 0; i < name.length; i++){
    console.log(name[i])
};

// explanation for addition

let blue = 0
for (let i = 1; i <= 50; i++){
 blue += i      ///sum = sum + i
 console.log(`sum = ${blue}: i ${i}`)
 // sum = sum + i   
}
console.log(`Final Results:${blue}`)

