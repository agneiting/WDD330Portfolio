//This will change the screen of the game
export default function screenSwitch(currentP, nextP) {
    //Remove active class from current page.
    var current = document.getElementById(currentP);
    current.classList.remove('active');
    //Add active class to next page.
    var next = document.getElementById(nextP);
    next.classList.add('active');
}