import { states } from "./states.js";

const usaMAP = document.getElementById("MAP");
const showScore = document.getElementById("SCORE");
let score = 1;
let message = document.getElementById("Message");
message.innerHTML = "Click to guess the correct state!";

function getRandomState() {
    return states[Math.floor(Math.random() * states.length)].id;
}

let randomState = getRandomState();
document.getElementById("State").innerHTML = randomState;

function guessState() {
    usaMAP.addEventListener("click", (event) => {
        if (event.target.tagName === 'path' && event.target.id === randomState) {
            event.target.classList.add("on");
            message.classList.add("correct");
            message.innerHTML = "Correct!";   
            showScore.innerHTML = score++;
            randomState = getRandomState();
            document.getElementById("State").innerHTML = randomState;

        } else if (event.target.tagName === 'path' && event.target.id !== randomState) {
            message.classList.add("incorrect");
            message.innerHTML = "You chose wrong! Game Over! The game has been reset.";
            setTimeout(() => {
                message.innerHTML = "Try again!";
            }, 1500); 
            resetGame();
            
        }
        return;
    });
}

function resetGame() {
    showScore.innerHTML = 0;
    score = 1;
    randomState = getRandomState();
    document.getElementById("State").innerHTML = randomState;
    // Optionally, remove the "on" class from all states
    document.querySelectorAll("#MAP path").forEach(path => path.classList.remove("on"));
}
function completeGame() {
    if (score === 48) {
        message.innerHTML = "Congratulations! You have guessed all states correctly!";
        setTimeout(() => {
            message.innerHTML = "Click to play again!";
        }, 3000);
        resetGame();
    }
}


window.addEventListener('load', () => {
    guessState();
    completeGame();
});