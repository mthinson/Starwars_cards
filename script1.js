//grabbing info and pushing info
document.getElementById("random").addEventListener('click', randomFunc);
let nameInfo =  document.querySelector(".name");
let height =  document.querySelector(".height");
let mass =  document.querySelector(".mass");
let birthyear =  document.querySelector(".birthyear");
let gender =  document.querySelector(".gender");
let species =  document.querySelector(".species");

//Random number generator for button
function randomFunc(){
    let ranNum = Math.ceil(Math.random() * 83);

    //fetch data inside api
fetch(`https://swapi.dev/api/people/${ranNum}`)
    .then(response => response.json())
    .then(data => {
        let cardInfo = data;
        console.log(cardInfo);

            //set info inside the dom
            nameInfo.innerHTML = `Name: ${cardInfo.name}`;
            height.innerHTML = `Height: ${cardInfo.height}`;
            mass.innerHTML = `Mass: ${cardInfo.mass}`;
            birthyear.innerHTML = `Birth Year: ${cardInfo.birth_year}`;
            gender.innerHTML = `Gender: ${cardInfo.gender}`;
            species.innerHTML = `Species: No species info available.`
        //fetch species info inside object
        
        return fetch(`${cardInfo.species[0]}`)
            .then(response => response.json())
            .then(data2 => {
                let speciesInfo = data2;
                console.log(speciesInfo);

               
                //replace species info into the dom if it is available
                species.innerHTML = `Species: ${speciesInfo.name}`;
            })  
    } )

}



