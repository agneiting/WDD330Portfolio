const inputWord = document.getElementById("inputWord");
const addWord = document.getElementById("addWord");
//When addWord button is clicked, add word to local storage.
addWord.onclick = function () {
    const key = "inputWord";
    const value = inputWord.value;
    //Lets make sure something exists in the input area, if not we won't send it to local storage.
    if (key && value) {
        localStorage.setItem(key, value);
    }
}