//your JS code here. If required.
// Prompt the user to enter the first number
const num1 = prompt("Enter the first number:");

// Prompt the user to enter the second number
const num2 = prompt("Enter the second number:");

// Convert the input strings to numbers
const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

// Check if the input values are valid numbers
if (!isNaN(number1) && !isNaN(number2)) {
// Check if the numbers are equal
const areEqual = number1 === number2;

// Display the result in an alert box
alert(`Are the numbers equal? ${areEqual}`);
