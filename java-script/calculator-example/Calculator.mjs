/*
import { isNumber, isOperation } from './Validator.mjs'; // export function
isNumber(10); // export function

import validator from './Validator.mjs'; // export default
validator.isNumber(10); // export default

*/

import validator from './Validator.mjs';

let inputDatas = [];

function appendData(inputData) {
    inputDatas.push(inputData);
}

function getInputDataMessages() {
    let message = '';
    inputDatas.map(value => message += value);
    return message;
}

function calculate() {
    let result = parseInt(inputDatas[0]);
    let currentNumber = 0;
    let currentOperation = '';
    let prevOperation = '';

    inputDatas.forEach( value => {
        if (validator.isNumber(parseInt(value))) {
            currentNumber = parseInt(value);
        } else if (validator.isOperation(value)) {
            currentOperation = value;
        }

        switch (prevOperation) {
            case '+':
                result += currentNumber;
                break;
            case '-':
                result -= currentNumber;
                break;
            case '*':
                result *= currentNumber;
                break;
            case '/':
                result /= currentNumber;
                break;
            default:
                break;
        }
        prevOperation = currentOperation;
        currentOperation = '';
    })

    return result;
}

export default {
    appendData,
    getInputDataMessages,
    calculate
}