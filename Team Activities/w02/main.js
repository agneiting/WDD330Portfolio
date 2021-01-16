function myFunction() {
    //Get user input.
    let a = document.getElementById('inputA').value;
    let b = document.getElementById('inputB').value;

    //Convert string to number.
    a = parseInt(a);
    b = parseInt(b);

    //If input is NOT a number, ask the user to enter a valid number.
    //If the input IS a number, switch to the next function.
    if(isNaN(a)) {
        document.getElementById('outputArea').innerHTML = "Please enter a valid number.";
    } else if(b > 0) {
        addNumbers(a, b);
    } else {
        addNumber(a);
    }
}

//Add numbers within number together.
function addNumber(x) {
    let result = 0;
    for (i=0; i<=x; i++) {
        result += i;
    }
    document.getElementById('outputArea').innerHTML = result;
}

//Add two number together
function addNumbers(x, y) {
    let result = x + y;
    document.getElementById('outputArea').innerHTML = result;
}