//Plays sound.
//Changes button position.
window.addEventListener('keydown', function(e) {
    playSound(e);
    moveButton(e);
})

//Makes it so the button isn't always styled as "playing".
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//Function that makes it so the button isn't always styled as "playing".
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //Skip if it isn't a transition.
    this.classList.remove('playing');
}

//Function that changes position of button when clicked. 10px down each click, then back to original at 11th click.
function moveButton(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);     
    if(key.dataset.moveIncrement) {
        key.dataset.moveIncrement = Number(key.dataset.moveIncrement) + 1;    
    }
    else{
        key.dataset.moveIncrement = 1;
    }
    if(key.dataset.moveIncrement > 10) {
        delete key.dataset.moveIncrement;
    }
    const pixels = Number(key.dataset.moveIncrement)*10;
    if(key.dataset.moveIncrement === undefined) {
        key.style.top = "0px";
    } else {
        key.style.top = `${pixels}px`;
    }
}

//Function that plays sound when key is pressed.
    //Sets audio to key. If key isn't associated with audio it won't start the function. 
    //Makes it so the key is clickable whenever and the sound will play mid sound.
    //Adds styling to button associated with pressed key.
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //Stops function from running all together
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
}