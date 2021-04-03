import * as util from './util.js'

//Changes screen when clicking "let me pick" button on home page.
document.getElementById("enterWord").addEventListener("click", function() {
    util.screenSwitch("home", "word");
  });


//Changes screen when clicking "pick for me" button on home page.
document.getElementById("providedWord").addEventListener("click", function() {
    util.screenSwitch("home", "play");
    //Run API to pick word
    //GETS THE LENGTH OF THE WORD FROM USER INPUT
    
  });


//Changes screen when clicking "->" button on word page and validates form.
document.getElementById("addWord").addEventListener("click", function() {
  const word = inputWord.value;
  //If the user doesn't type in a word, or they use a space, the box will turn red.
  if (word == "" || word.indexOf(' ') !== -1) {
    document.getElementById("inputWord").style.background = "#F4B6A7";
  } else {
      //Switches to Play page
      util.screenSwitch("word", "play");
      //GETS THE LENGTH OF THE WORD FROM USER INPUT
      const LENGTH = util.findLength(inputWord.value);
      util.createWordElements(LENGTH, word);
  }
  //Stops page from refreshing
  event.preventDefault();
});


//Changes Alphabet button when clicked
document.querySelectorAll('.key').forEach(item => {
  item.addEventListener('click', event => {
    util.changeAlphabet(item.id);
    console.log(item.id);
  })
})