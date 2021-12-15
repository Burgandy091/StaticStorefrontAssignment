// OBJECTS 

//Object use multiple date types that consist of key/value pairs 
//Objects are denoted by {}

let name = {
    firstNames: "Taylor",
    lastName: "Dickens",

};


let netflix = {
    name:"Great Bristish Bakeoff",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 12, 
            episodeInf: [
                {episode: 1, episodeName: "Pilot"},
                {episode: 2, episodeName: "Ganache"},
            ],
        },    
    },
};


console.log("All data:", netflix); //Output is an object with a bunch of the data from up above.
console.log(netflix.name); // Output is Great British Bakeoff: DOT notaion
console.log("Season 1:", netflix.seasonInfo.season1);
console.log("First Episode:", netflix.seasonInfo.season1.episodeInfo[0].episodeName);


//Assigning Keys to Object Using Dot Notations
//objectName.keyName.nameOfNewKey = value;
netflix.seasonInfo.totalSeasons = 12;
console.log(netflix.seasonInfo);



//Challenge
//Add a new object called newEpisode to out object of netflix. 
//The new object is going to have an episode of 7 of "Derek" to th episode array.


let newEpisode = netflix.seasonInfo.season1.episodeInf.push({episode: 7, episodeName: Derek});
console.log(nerflix.seasonInfo.season1);


// JSOn (Javascript Object Notation)
// Used to send date back and forth between servers and cliens.
// Looks and acts like objects. we can use dot and bracket notation to access information within those "objects". 

let spaceJam = {
    toonSquad: {
        human: "Michael Jordan",
        human2: "Bill Murray",
        rabbit: "Bugs Bunny",
        duck: "Daffy Duck",
    },
    monster: {
    0: "Bupkus",
    1: "Bang",
    2: "Nawt",
    3: "Pound",
},

    nbaPlayer: {
    phoenixSuns: "Charles Barkley",
    newJerseyNets: "shaw Bradley", 
    newYorkNick: "Patrick Ewing",
    },
};
 

// Object.key() - is a method that returns an array if a given objects own keys (properties) names.
console.log(Objects.keys(spaceJam.toonSquad)); // Output is th keys is toonssquad in an array.
console.log(Object.keys(spaceJam.toonSquad.duck)); // Output is the indices of the string "Daffy Duck".
console.log(Object.keys(spaceJam.toonSquad).toString()); // Output is a string of out keys.

//object .values()- is a method that returns an array of a given object own values.
console.log(Object.values(spaceJam.toonSquad));

// SQUARE BRACKET NOTATION  
// We can used square brakcket notation with objects, but it will be a little bit diffrent how e use them.

let sailotScouts = {
    sailorMoon: {
        hairColor: "blonde",
        heigth: 5,
        eyeColor: "green"
    },
    powerFull: true,
    
}

console.log(sailorScouts.powerFull); //Output is true
console.log(sailorScouts["powerFull"]); //Output is also true.


let baking = {};
baking["zucchini"] = "better make some bread";
baking["garden"].push({ vegetable: "zucchini"});
console.log(baking);



