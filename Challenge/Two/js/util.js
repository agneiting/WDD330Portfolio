//This will change the screen of the game
export function screenSwitch(currentP, nextP) {
    //Remove active class from current page.
    var current = document.getElementById(currentP);
    current.classList.remove('active');
    //Add active class to next page.
    var next = document.getElementById(nextP);
    next.classList.add('active');
}

//This will find the length of the word.
export function findLength(x) {
const inputWord = x;
const wordLength = inputWord.length;
console.log(wordLength);
};

//Turn clicked alphabet letter to transparent
export function transparentAlphabet(x) {
    const letter = x;
    document.getElementById(letter).style.background = "#808080"; 
    document.getElementById(letter).style.color = "#000000";
    document.getElementById("letter").disabled = true; 
}