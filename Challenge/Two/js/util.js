import * as wordArray from './wordArray.js'

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
    console.log("This word is " + wordLength + " letters long.");
    return wordLength;
};

//creates element for each letter in word
export function createWordElements(l, w) {
    const length = l;
    const word = w;
    for (var i =0; i < length; i++) {
        //Get the letter
        var letter = word.charAt(i);  
        //Create DOM elements
        var p = document.createElement('p'); 
        p.innerHTML = letter;


        //Append
        document.getElementById('playWord').appendChild(p); 
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

export function loser(a) {
    var attempt = a;
    var currentStage = "stage" + (attempt + 1);
    var nextStage = "stage" + (attempt + 2);
    if (attempt < 5) {
        //Remove active class from current page.
        var current = document.getElementById(currentStage);
        console.log(currentStage);
        current.classList.remove('currentStage');
        //Add active class to next page.
        var next = document.getElementById(nextStage);
        next.classList.add('currentStage'); 
        attempt++;
        console.log(attempt);  
      } else {
            screenSwitch("play", "lose");
            console.log("else worked");
      }
}

//FINAL WORD ON THE WORD
export function getWord() {
    var userWord = inputWord.value;
    var randomWord = wordArray.randomWord();
    var word = '';
    if (userWord == '') {
        word = randomWord;
        console.log(word);
    } else {
        word = userWord;
        console.log(word);
    }
    return word;
}



//export function lowerAnimation() {
    //var animation = element.animate(keyframes, options);
//}