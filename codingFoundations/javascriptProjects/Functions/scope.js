let x = 12
 
function scope() {
    let x = 33;
    console.log(x)
};

console.log(x);
scope();

let y = 12;

function moreScope(){
    y = 33;
    console.log(y)
};

console.log(y);
moreScope();

var num = 12;
function varTest() {
    var num = 33;
    if (1 == 1) {
        console.log(num)

    }

    console.log(num)

}


function letTest() {
 var num = 33;
 if(1 == 1){
     let num = 45
     console.log(num)
 }
 console.log(num)
}

letTest()
console.log(num)




// copied from dannielle

