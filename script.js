let operator;
let a;
let b;
let justCalculated = false;




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


}

let currentDisplay = '0'

function updateDisplay(value) {
    const display = document.querySelector('#display');

    if(typeof value === 'number' && value.toString().length > 30) {
        value = parseFloat(value.toPrecision(8));
    }
    display.textContent = value;
    currentDisplay = value;
}



const buttonPress = document.querySelectorAll('button');


buttonPress.forEach(button => {
    button.addEventListener('click', function(event) {
        const buttonValue = button.value;

        if (!isNaN(buttonValue)) {
            if (currentDisplay === '0' || justCalculated) {
                updateDisplay(buttonValue);
                justCalculated = false;
            } else {
                updateDisplay(currentDisplay + buttonValue);
            }
        } // button operator handler
        else if(['+', '-', '*', '/'].includes(buttonValue)) {
            if (operator && a !== null && !justCalculated) {
                b = parseFloat(currentDisplay);
                const result = operate(operator, a, b);
                updateDisplay(result.toString());
                a = result;






            } else {
                a = parseFloat(currentDisplay);
            }
            operator = buttonValue;
            justCalculated = false;
            updateDisplay('0');
        }
        else if(buttonValue === '=') {
            if (operator && a !== null) {
                b = parseFloat(currentDisplay);
                const result = operate(operator, a, b);
                updateDisplay(result.toString());
                justCalculated = true;
                operator = null;
                a = null;
                b = null;
            }
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

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key)) {
        if (currentDisplay === '0' || justCalculated) {
            updateDisplay(key);
            justCalculated = false;
        }
        else {
            updateDisplay(currentDisplay + key);
        }
    } // keyboard operator handler
    else if(['+', '-', '*', '/'].includes(key)) {
     if (operator && a !==null && !justCalculated) {
        b = parseFloat(currentDisplay);
        const result = operate(operator, a, b);
        updateDisplay(result.toString());
        a = result;
    } else {
        a = parseFloat(currentDisplay);
    }
    operator = key;
    justCalculated = false;
    updateDisplay('0');
    }
    else if(key === '=' || key === 'Enter') {
        if (operator && a !== null) {
            b = parseFloat(currentDisplay);
            const result = operate(operator, a, b);
            updateDisplay(result.toString());
            justCalculated = true;
            operator = null;
            a = null;
            b = null;
        }
    }
    else if(key === 'clear' || key === 'Escape') {
        currentDisplay = '0';
        operator = null;
        a = null;
        b = null;
        updateDisplay('0');
    }
    else if (key === '.') {
        if (!currentDisplay.includes('.')) {
            updateDisplay(currentDisplay + '.');
        }
    }

    else if (key === 'Backspace') {
        if (currentDisplay.length > 1) {
            updateDisplay(currentDisplay.slice(0, -1));
        } else {
            updateDisplay('0');
        }
    }
    
})