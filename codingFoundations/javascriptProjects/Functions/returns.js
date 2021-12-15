// Return "pushes" information out of the function and make it available to use elsewhere

function hi() {
    return 'hi'
};

hi();
console.log(hi());



//Return and console log
// Code will not run


function capName(name) {
    let capName = '';
    for (let letter in name) {
    if (letter == 0) {
        capName += name[letter].toUpperCase();
    } else {
        capName += name[letter].toLowerCase();
    }

    }
console.log(capName);
return capName

}

capName('DanIElLe')