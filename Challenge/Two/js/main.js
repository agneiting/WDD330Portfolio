import screenSwitch from './util.js'

//Changes screen when clicking "let me pick" button on home page.
document.getElementById("enterWord").addEventListener("click", function() {
    screenSwitch("home", "word");
  });

//Changes screen when clicking "pick for me" button on home page.
document.getElementById("providedWord").addEventListener("click", function() {
    screenSwitch("home", "play");
  });

//Changes screen when clicking "->" button on word page.
document.getElementById("addWord").addEventListener("click", function() {
    screenSwitch("word", "play");
  });

/*//Changes screen to WIN.
 {
    screenSwitch("word", "win");
  };

//Changes screen to LOSE.
  {
    screenSwitch("word", "win");
  };
*/