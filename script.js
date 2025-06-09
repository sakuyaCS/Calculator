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

    if (val === 'clear') {
        currentDisplay = '0';
        a = null;
        operator = null;
        
    } else if (['+', '-', '*', '/'].includes(val)) {
        // Store first number and operator
        a = parseFloat(currentDisplay); // save first number, convert string to number
        operator = val; // save operator that was pressed
        currentDisplay = '0'; // reset the display to enter second number
        
    } else if (val === '=') { //equal btn logic

        if (a !== null && operator !== null) { // if both operator and num exist
            b = parseFloat(currentDisplay); // convert second number from str to num
            const result = operate(operator, a, b); // result is stored, operate func used on the three variables
            currentDisplay = result.toString(); // display shows str version of result
        }
        
    } else {
        
        if (currentDisplay === '0') {
            currentDisplay = val; // set display to 0 if value is 0
        } else {
            currentDisplay += val; // adds digit to existing number, no leading 0
        }
    }

    display.textContent = currentDisplay; // update display with content
}

let clickedBtn = document.querySelectorAll('button');

clickedBtn.forEach(button => { 
    button.addEventListener('click', function(event) {

        const buttonValue = event.target.value || event.target.textContent; // event delegation
        updateDisplay(buttonValue); // display holds buttonValue
    });
});





