let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScrip",
    week: 1
};

// can be used for a list 
for(item in student){
    console.log(item)
    console.log(item)
    console.log(student[item])
}

//4 loop

let name = "dANieLLe"
let capName;

for (i in name){
    console.log(i)
    if (i == 0) {
        capName = name[i].toUpperCase();
        console.log(capName)
    } else {
        capName += name[i].toLowerCase();
        console.log(capName)
    }
}

console.log(capName);

