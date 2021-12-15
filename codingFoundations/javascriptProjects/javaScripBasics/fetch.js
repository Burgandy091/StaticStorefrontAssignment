// Example Fetch Resquest
/*
fetch('https://api.spacexdata.com/v5/launches/next')    
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(jsonData => {
        console.log(jsonData);
        document.getElementById('display-date'). 
        innerText = jsonData.name;
    });
*/

const baseURL = 'https://api.spacexdata.com';

let formElement = document.getElementById('search-form');
let listElement = document.getElementById('rocket-list');


function fetchRockets() {
    

    // Retrive the rocket data with FETCH
    // Format he data that comes back
    //Presnet that data with DOM Elements
    fetch(`${ baseURL }/v4/rockets`)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);

            for (let rocket of jsonData){
                displayRocket(rocket);
            }

    })
}

function displayRocket(rocketData) {

    let rocketCard = document.createElement('li');
    let rocketTitle = document.createElement('h1');
    let rocketImage = document.createElement('img');
    let rocketDetail = document.createElement('p');

    rocketTitle.innerText = rocketData.name;   ///This part is adding the values from the variable
    rocketImage.src = rocketData.flickr_images[0];
    rocketDetail.innerText = rocketData.mass.lb;

    rocketCard.classList.add('rocket-card');
    rocketTitle.classList.add('rocket-title');
    rocketImage.classList.add('rocket-image');
    rocketDetail.classList.add('rocket-detail');
    
    rocketCard.appendChild(rocketTitle);    ///Here we are using the variable name to append
    rocketCard.appendChild(rocketImage);
    rocketCard.appendChild(rocketDetail);


    listElement.appendChild(rocketCard); /// Adding all of our stuff

    
    
    
};

fetchRockets();
