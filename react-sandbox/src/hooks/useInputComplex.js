import { useReducer } from 'react'

const initialInputState = {
    value: '',
    isTouched: false,
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {
            isTouched: state.isTouched,
            value: action.value,
        }
    }
    if (action.type === 'BLUR') {
        return {
            isTouched: true,
            value: state.value,
        }
    }
    if (action.type === 'RESET') {
        return {
            isTouched: false,
            value: '',
        }
    }
    return initialInputState
}

const useInputComplex = (validateFunction) => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState,
    )

    const enteredValueIsValid = validateFunction(inputState.value)
    const hasError = !enteredValueIsValid && inputState.isTouched

    const onChangeHandler = (e) => {
        dispatch({ type: 'INPUT', value: e.target.value })
    }

    const onBlurHandler = (e) => {
        dispatch({ type: 'BLUR' })
    }

    const reset = () => {
        dispatch({ type: 'RESET' })
    }

    return {
        value: inputState.value,
        isValid: enteredValueIsValid,
        hasError,
        onChangeHandler,
        onBlurHandler,
        reset,
    }
}

export default useInputComplex
