/* Function */
// 1. 함수 선언문
// 함수에 대한 hoisting 적용
// 브라우저 글로벌 객체인 window에 testFunc가 포함됨

testFunc(); // hoisting

function testFunc() {
    console.log("Test Function");
}

testFunc();

// 2. 함수 표현식

// testFunc02(); // Reference Error -> hosting 미적용

let testFunc02 = function () {
    console.log("Test Function 2")
}

testFunc02();

// 3. new Function()





/* Calculator */

// keyboard 입력
// to add module run $ npm install readline-sync
//const readLine = require('readline-sync'); // old way - common js 모듈화
import { question } from 'readline-sync'; // ES6 방식 모듈화
                                          // 실행방법: $ node --experimental-json-modules Calculator.mjs


function showPrompt() {
    console.clear();
    const firstNumber = question("Enter first num : ");
    const operation = question("Enter operation : ");
    const secondNumber = question("Enter second num : ");

    const validation = isNumber(firstNumber) && isOperator(operation) && isNumber(secondNumber);

    if (validation) {
        console.log("Calculating...");
        let result = calculate(parseInt(firstNumber), operation, parseInt(secondNumber));
        console.log(`Result : ${result}`);
    } else {
        console.log("Invalid input");
    }
}

function isNumber(number) {
    return !isNaN(parseInt(number));
}

function isOperator(operation) {
    let operations = '+-*/';
    return operations.indexOf(operation) !== -1;
}

function calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+': return firstNumber + secondNumber;
        case '-': return firstNumber - secondNumber;
        case '*': return firstNumber * secondNumber;
        case '/': return firstNumber / secondNumber;

    }
}

showPrompt();

