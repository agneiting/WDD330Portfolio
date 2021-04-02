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
  var word = inputWord.value;
  //If the user doesn't type in a word, or they use a space, the box will turn red.
  if (word == "" || word.indexOf(' ') !== -1) {
    document.getElementById("inputWord").style.background = "#EC7357";
  } else {
      //Switches to Play page
      util.screenSwitch("word", "play");
      //GETS THE LENGTH OF THE WORD FROM USER INPUT
      const LENGTH = util.findLength(inputWord.value);
  }
  //Stops page from refreshing
  event.preventDefault();
});


//