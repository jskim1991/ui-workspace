import { useState } from 'react'

const useInputText = (validateFunction) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const enteredValueIsValid = validateFunction(enteredValue)
    const hasError = !enteredValueIsValid && isTouched

    const onChangeHandler = (e) => {
        if (e.target.value !== '') {
            setIsTouched(true)
        } else {
            setIsTouched(false)
        }
        setEnteredValue(e.target.value)
    }

    const onBlurHandler = (e) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        enteredValue,
        isValid: enteredValueIsValid,
        hasError,
        onChangeHandler,
        onBlurHandler,
        reset,
    }
}

export default useInputText
