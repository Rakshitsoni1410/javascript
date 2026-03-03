function arithmetic(a: number, b: number) {
    return {
        addition: a + b,
        subtraction: a - b,
        multiplication: a * b,
        division: a / b,
        modulus: a % b
    };
}

let a: number = 11;
let b: number = 5;

let result = arithmetic(a, b);

console.log("Addition:", result.addition);
console.log("Subtraction:", result.subtraction);
console.log("Multiplication:", result.multiplication);
console.log("Division:", result.division);
console.log("Modulus:", result.modulus);