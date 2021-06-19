import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import {
    numberFormatWithComma,
    stringToNumber,
} from '../../Converter/MoneyConverter'
import useInput from '../../../hooks/useInput'

const AddModal = (props) => {
    const {
        value: amount,
        enteredValueLocaleString: amountInLocalString,
        isValid: amountIsValid,
        hasError: amountHasError,
        valueChangedHandler: amountChangedHandler,
        inputBlurHandler: onBlurHandler,
        reset: reset,
    } = useInput((v) => v.trim() !== '')

    const submitHandler = (e) => {
        e.preventDefault()

        if (amountHasError) {
            return
        }

        reset()
    }

    return (
        <div>
            <Backdrop show={true} clicked={props.onClose} />
            <div className={classes.Modal}>
                <div className={classes.content}>
                    <h3>Modal header</h3>
                    <label htmlFor="title_input">Title</label>
                    <input type="text" id="title_input" />
                    <label htmlFor="amount_input">Amount</label>
                    <input
                        type="type"
                        id="amount_input"
                        onChange={amountChangedHandler}
                        onBlur={onBlurHandler}
                        value={
                            stringToNumber(amount) >= 10000
                                ? numberFormatWithComma(stringToNumber(amount))
                                : amount
                        }
                    />
                    <div>{amountInLocalString}</div>
                    {amountHasError && <p>amount is invalid</p>}
                    <button onClick={props.onClose}>close</button>
                    <button disabled={!amountIsValid} onClick={submitHandler}>
                        comfirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddModal
