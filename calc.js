var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return a / b;
    };
    return Calculator;
}());
// Example usage
var calculator = new Calculator();
var a = 10;
var b = 5;
console.log("Adding: ".concat(a, " + ").concat(b, " = ").concat(calculator.add(a, b)));
console.log("Subtracting: ".concat(a, " - ").concat(b, " = ").concat(calculator.subtract(a, b)));
console.log("Multiplying: ".concat(a, " * ").concat(b, " = ").concat(calculator.multiply(a, b)));
console.log("Dividing: ".concat(a, " / ").concat(b, " = ").concat(calculator.divide(a, b)));
