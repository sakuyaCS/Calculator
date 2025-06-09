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

    if (operator === '+') return addition(num1, num2);
    if (operator === '-') return subtraction(num1, num2);
    if (operator === '*') return multiply(num1, num2);
    if (operator === '/') return divide(num1, num2);

}

const buttons = document.querySelectorAll('buttons');

buttons.forEach(buttons => buttons.addEventListener('click', handleButtonClick));







