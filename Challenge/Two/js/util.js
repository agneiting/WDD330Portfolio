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
    const word = x;
    const wordLength = word.length;
    console.log(wordLength);
    return wordLength;
};

//creates element for each letter in word
export function createWordElements(l) {
    const length = l;
    for (var i =0; i < length; i++) {
    //I LEFT OFF HERE AMBER OVER HERE!!!!!!! I NEED TO ADD ELEMENTS FOR EACH LETTER    
    }
    
}

//Turn clicked alphabet letter to transparent
export function changeAlphabet(x) {
    const letter = x;
    document.getElementById(letter).style.background = "rgba(0, 0, 0, 0.26)";
    document.getElementById(letter).style.color = "black"; 
    document.getElementById(letter).style.cursor = "default";
    document.getElementById(letter).disabled = true; 
}