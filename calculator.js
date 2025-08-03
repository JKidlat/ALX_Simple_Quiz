// calculator.js

// Function to perform addition
function add(number1, number2) {
    return number1 + number2;
}

// Function to perform subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to perform multiplication
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to perform division
function divide(number1, number2) {
    // Check for division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Get the DOM elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultSpan = document.getElementById('calculation-result');

// Function to get numbers and update the result
function calculate(operation) {
    // Use parseFloat to convert string input to a number,
    // and default to 0 if the input is empty or not a valid number.
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    
    let result;
    // Perform the specified operation
    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operation";
    }

    // Display the result in the span element
    resultSpan.textContent = result;
}

// Attach event listeners to each button
document.getElementById('add').addEventListener('click', function() {
    calculate('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    calculate('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    calculate('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    calculate('divide');
});
