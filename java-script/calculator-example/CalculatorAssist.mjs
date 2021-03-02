import { question } from 'readline-sync';
import calculator from './Calculator.mjs';

function showPrompt() {
    while(true) {
        let inputData = question('Enter number or operation : ');
        if (inputData !== '=') {
            calculator.appendData(inputData);
            console.log(calculator.getInputDataMessages() + "=" + calculator.calculate());
        } else {
            break;
        }
    }
}

showPrompt();