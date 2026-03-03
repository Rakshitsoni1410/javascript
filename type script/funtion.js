function arithmetic(a, b) {
    return {
        addition: a + b,
        subtraction: a - b,
        multiplication: a * b,
        division: a / b,
        modulus: a % b
    };
}
var a = 11;
var b = 5;
var result = arithmetic(a, b);
console.log("Addition:", result.addition);
console.log("Subtraction:", result.subtraction);
console.log("Multiplication:", result.multiplication);
console.log("Division:", result.division);
console.log("Modulus:", result.modulus);
