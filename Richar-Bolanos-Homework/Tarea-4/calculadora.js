// calculadora.js. Los argumentos deberán ser proporcionados de la siguiente manera: [número1] [operación] [número2]. Por ejemplo, para sumar 5 y 3, puedes ejecutar el siguiente comando en tu terminal:
//node calculadora.js 5 + 3
//Usage: node calculadora.js <number1> <operator> <number2></number2>
const argv = process.argv.slice(2);

if (argv.length !== 3) {
  console.error("Usage: node calculadora.js <number1> <operator> <number2>");
  process.exit(1);
}

const num1 = parseFloat(argv[0]);
const operator = argv[1];
const num2 = parseFloat(argv[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.error("Invalid numbers");
  process.exit(1);
}

let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.error("Cannot divide by zero");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.error("Invalid operator");
    process.exit(1);
}

console.log(`Result: ${result}`);
