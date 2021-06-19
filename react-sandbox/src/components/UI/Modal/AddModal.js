import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import useInputMoney from '../../../hooks/useInputMoney'
import useInputText from '../../../hooks/useInputText'

const AddModal = (props) => {
    const {
        value: amount,
        enteredValueLocaleString: amountInLocalString,
        isValid: amountIsValid,
        hasError: amountHasError,
        valueChangedHandler: amountChangedHandler,
        inputBlurHandler: onBlurHandler,
        reset: resetAmount,
    } = useInputMoney((v) => v.trim() !== '')

    const {
        enteredValue: title,
        isValid: titleIsValid,
        hasError: titleHasError,
        onChangeHandler: titleChangedHandler,
        onBlurHandler: titleBlurHandler,
        reset: resetTitle,
    } = useInputText((v) => v.trim() !== '' && v.trim().length < 10)

    const submitHandler = (e) => {
        e.preventDefault()

        if (amountHasError || titleHasError) {
            return
        }

        resetAmount()
        resetTitle()
    }

    return (
        <div>
            <Backdrop show={true} clicked={props.onClose} />
            <div className={classes.Modal}>
                <div className={classes.content}>
                    <h3>Modal header</h3>
                    <label htmlFor="title_input">Title</label>
                    <input
                        type="text"
                        id="title_input"
                        onChange={titleChangedHandler}
                        onBlur={titleBlurHandler}
                        value={title}
                    />
                    <label htmlFor="amount_input">Amount</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        id="amount_input"
                        onChange={amountChangedHandler}
                        onBlur={onBlurHandler}
                        value={amount}
                    />
                    <div>{amountInLocalString}</div>
                    {amountHasError && <p>amount is invalid</p>}
                    {titleHasError && <p>title is invalid</p>}
                    <button onClick={props.onClose}>close</button>
                    <button
                        disabled={!amountIsValid || !titleIsValid}
                        onClick={submitHandler}
                    >
                        comfirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddModal
