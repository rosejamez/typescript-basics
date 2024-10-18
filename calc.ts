class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return a / b;
    }
}


const calculator = new Calculator();

const a = 10;
const b = 5;

console.log(`Adding: ${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`Subtracting: ${a} - ${b} = ${calculator.subtract(a, b)}`);
console.log(`Multiplying: ${a} * ${b} = ${calculator.multiply(a, b)}`);
console.log(`Dividing: ${a} / ${b} = ${calculator.divide(a, b)}`);
