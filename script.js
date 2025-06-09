let operator;
let a;
let b;




function addition (num1, num2){ 

    let a = num1;
    let b = num2;

    let sum = a + b;

    return sum;

}

function subtraction(num1, num2) {
    let a = num1;
    let b = num2;

    let difference = a - b;
    
    return difference;
}

function multiply (num1, num2) {

    let a = num1;
    let b = num2;

    let product = a * b;

    return product;


}

function divide (num1, num2) {

    let a = num1;
    let b = num2;

    let quotient = a/b;

    return quotient;
}

function operate (operator, num1, num2) {

    if (operator === "+") {
        return addition(num1, num2);
    } else if (operator === "-") { 
        return subtraction(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else return 0;

}

let currentDisplay = '0'; // tracking variable

function updateDisplay(val) { // take in a number or operator or command

    const display = document.querySelector('#display');


    if (val === 'clear') { // when clear btn pressed, set display to 0
    currentDisplay = '0';
    } else if (currentDisplay === '0' && val !== 0) { // replace the placeholder 0
    currentDisplay = val;
    } else {
    currentDisplay += val; // handle adding to an existing number
    }


    display.textContent = currentDisplay


}

let clickedBtn = document.querySelectorAll('button');

clickedBtn.forEach(button => { 
    button.addEventListener('click', function(event) {

        const buttonValue = event.target.value || event.target.textContent; // event delegation
        updateDisplay(buttonValue); // display holds buttonValue
    });
});






