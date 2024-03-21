#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select an operator to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Substraction", "Multiplication", "Division"]
  },
]);

if(answer.operators === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.operators === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.operators === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber)
}
else{
    console.log("Please select an opertor")
}
