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

    if (num2 === 0) { 
        return 'ERROR';
    }

    let a = num1;
    let b = num2;

    let quotient = a/b;

    return quotient;
}

function operate (operator, num1, num2) {

    const a = parseFloat(num1)
    const b = parseFloat(num2);

    if (operator === '+') return addition(a, b);
    if (operator === '-') return subtraction(a, b);
    if (operator === '*') return multiply(a, b);
    if (operator === '/') return divide(a, b);

    return 'ERROR';

}

let currentDisplay = '0'

function updateDisplay(value) {
    const display = document.querySelector('#display');
    display.textContent = value;
    currentDisplay = value;
}



const buttonPress = document.querySelectorAll('button');


buttonPress.forEach(button => {
    button.addEventListener('click', function(event) {
        const buttonValue = button.value;

        if (!isNaN(buttonValue)) {
            if (currentDisplay === '0') {
                updateDisplay(buttonValue);
            } else {
                updateDisplay(currentDisplay + buttonValue);
            }
        }
        else if(['+', '-', '*', '/'].includes(buttonValue)) {
            operator = buttonValue;
            a = parseFloat(currentDisplay);
            updateDisplay('0');
        }
        else if(buttonValue === '=') {
            b = parseFloat(currentDisplay);
            const result = operate(operator, a, b);
            updateDisplay(result.toString());
        }
        else if(buttonValue === 'clear') {
            currentDisplay = '0';
            operator = null;
            a = null;
            b = null;
            updateDisplay('0');
        } else if (buttonValue === '.') {
            if (!currentDisplay.includes('.')) {
                updateDisplay(currentDisplay + '.');
            }
        }
    });
});