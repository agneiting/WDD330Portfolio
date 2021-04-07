import * as util from './util.js'
import * as wordArray from './wordArray.js'

//Changes screen when clicking "let me pick" button on home page.
document.getElementById("enterWord").addEventListener("click", function() {
    util.screenSwitch("home", "word");
  });


//Changes screen when clicking "pick for me" button on home page.
document.getElementById("providedWord").addEventListener("click", function() {
    util.screenSwitch("home", "play");
    //Run API to pick word
    wordArray.randomWord();
    util.getWord();
    const word = util.getWord();
    //GETS THE LENGTH OF THE WORD FROM USER INPUT AND CREATE ELEMENTS ON PLAY PAGE
    const LENGTH = util.findLength(word);
    util.createWordElements(LENGTH, word);
  });


//Changes screen when clicking "->" button on word page and validates form.
document.getElementById("addWord").addEventListener("click", function() {
  //const word = inputWord.value;
  const word = util.getWord();
  //If the user doesn't type in a word, or they use a space, the box will turn red.
  if (word == "" || word.indexOf(' ') !== -1) {
    document.getElementById("inputWord").style.background = "#F4B6A7";
  } else {
      //Switches to Play page
      util.screenSwitch("word", "play");
      //GETS THE LENGTH OF THE WORD FROM USER INPUT AND CREATE ELEMENTS ON PLAY PAGE
      const LENGTH = util.findLength(word);
      util.createWordElements(LENGTH, word);
  }
  //Stops page from refreshing
  event.preventDefault();
});


//Changes Alphabet button when clicked and sends to loser screen
var attempt=0;
document.querySelectorAll('.key').forEach(item => {
  item.addEventListener('click', event => {
    util.changeAlphabet(item.id);
    util.loser(attempt);
    attempt++;
  })
})