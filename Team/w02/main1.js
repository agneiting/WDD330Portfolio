function numberOne() {
    //Grabbing user input.
    let val = document.getElementById("number").value;
    //Makes input an integer, and get sum of numbers.
    let res = (parseInt(val) * (parseInt(val)+1)) / 2;
    //Output to div.
    document.getElementById("outputArea").innerHTML= res;
}

let res = 0;

function getInput() {
    //Grabbing user input.
    const valOne = document.getElementById("inputA").value;   
    const valTwo = document.getElementById("inputB").value; 
    let symbol = document.getElementById("symbol").value;

    //Make input an integer.
    const valueOne = parseInt(valOne);
    const valueTwo = parseInt(valTwo); 

    //Choose which function to use based on arithmatic symbol.
    if(symbol == '+') {
        add(valueOne, valueTwo);   
    } else if(symbol == '*') {
        multiply(valueOne, valueTwo);
    } else if(symbol == '-') {
        sub(valueOne, valueTwo);
    } else {
        document.getElementById("outputAreaTwo").innerHTML= 'Sorry, that formula has not been added to our calculator.';    
    }   

    //Output to div.
    document.getElementById("outputAreaTwo").innerHTML= res;
}

function add(x, y) { 
    //Add two numbers together.
    res = x + y;
    return res;
}


const multiply = function mult(x,y){
    //Multiply
    res = x * y;
    return res;
};

const sub = (x,y) => res = (x - y);