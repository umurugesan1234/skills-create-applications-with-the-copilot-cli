#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations (as shown on the calculator):
 *   + : Addition       — Adds two numbers
 *   - : Subtraction    — Subtracts the second number from the first
 *   * : Multiplication — Multiplies two numbers (use 'x' as an alias)
 *   / : Division       — Divides the first number by the second
 *
 * Usage:
 *   node calculator.js <number> <operator> <number>
 *
 * Examples:
 *   node calculator.js 5 + 3       => 8
 *   node calculator.js 10 - 4      => 6
 *   node calculator.js 6 x 7       => 42
 *   node calculator.js 20 / 5      => 4
 */

// Addition: adds two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: subtracts the second number from the first
function subtract(a, b) {
  return a - b;
}

// Multiplication: multiplies two numbers
function multiply(a, b) {
  return a * b;
}

// Division: divides the first number by the second
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Calculates result for the given operator
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      throw new Error(`Unknown operator '${operator}'. Supported operators: + - * (or x) /`);
  }
}

// CLI entry point — only runs when executed directly
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error("Usage: node calculator.js <number> <operator> <number>");
    console.error("Operators: + - * (or x) /");
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    console.log(calculate(num1, operator, num2));
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };
