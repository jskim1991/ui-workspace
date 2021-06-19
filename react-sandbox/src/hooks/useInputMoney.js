import { useState } from 'react'
import {
    numberFormatWithComma,
    numberToKorean,
    stringToNumber,
} from '../components/Converter/MoneyConverter'

const useInputMoney = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [enteredValueLocaleString, setEnteredValueLocaleString] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueChangedHandler = (e) => {
        setEnteredValue(e.target.value)
        const number = stringToNumber(e.target.value)
        if (number >= 10000) {
            setEnteredValue(
                numberFormatWithComma(stringToNumber(e.target.value)),
            )
            setEnteredValueLocaleString(numberToKorean(number / 10000))
        } else if (!isNaN(number)) {
            setEnteredValue(String(number))
            setEnteredValueLocaleString('')
        }
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        enteredValueLocaleString,
        isValid: valueIsValid,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        reset,
    }
}

export default useInputMoney
