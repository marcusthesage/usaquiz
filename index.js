import { states } from "./states.js" 


function guessState(){
    const usaMAP = document.getElementById("MAP");
    var randomState = states[Math.floor(Math.random() * states.length)];
    document.getElementById("State").innerHTML = (randomState.id)
    usaMAP.addEventListener("click", (event) => {
        // Check if a <path> element was clicked
        if (event.target.tagName = (randomState.id)) {
        alert(`You clicked on state: ${stateId}`);
        }
    });

    
   
    

}

window.addEventListener('load', guessState())