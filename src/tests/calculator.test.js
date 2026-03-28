const { add, subtract, multiply, divide, calculate } = require("../calculator");

// -------------------------------------------------------
// Addition tests
// -------------------------------------------------------
describe("add", () => {
  test("adds two positive numbers (2 + 3 = 5)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

// -------------------------------------------------------
// Subtraction tests
// -------------------------------------------------------
describe("subtract", () => {
  test("subtracts two positive numbers (10 - 4 = 6)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("returns negative when second number is larger", () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test("subtracts a negative number (double negative)", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts two negative numbers", () => {
    expect(subtract(-4, -6)).toBe(2);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// -------------------------------------------------------
// Multiplication tests
// -------------------------------------------------------
describe("multiply", () => {
  test("multiplies two positive numbers (45 * 2 = 90)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies by zero returns zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies by one returns the same number", () => {
    expect(multiply(42, 1)).toBe(42);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test("multiplies two negative numbers returns positive", () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

// -------------------------------------------------------
// Division tests
// -------------------------------------------------------
describe("divide", () => {
  test("divides two positive numbers (20 / 5 = 4)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides with a decimal result", () => {
    expect(divide(10, 3)).toBeCloseTo(3.3333, 4);
  });

  test("divides a negative by a positive", () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test("divides two negative numbers returns positive", () => {
    expect(divide(-20, -5)).toBe(4);
  });

  test("divides zero by a number returns zero", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides decimal numbers", () => {
    expect(divide(7.5, 2.5)).toBeCloseTo(3);
  });

  // Edge case: division by zero
  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
});

// -------------------------------------------------------
// calculate() integration tests
// -------------------------------------------------------
describe("calculate", () => {
  test("handles + operator", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("handles - operator", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("handles * operator", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("handles x as multiplication alias", () => {
    expect(calculate(6, "x", 7)).toBe(42);
  });

  test("handles / operator", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("throws on division by zero via /", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws on unknown operator", () => {
    expect(() => calculate(1, "%", 2)).toThrow("Unknown operator '%'");
  });
});
