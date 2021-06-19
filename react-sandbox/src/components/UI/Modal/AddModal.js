import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import { useState } from 'react'
import {
    numberFormatWithComma,
    numberToKorean,
    stringToNumber,
} from '../../Converter/MoneyConverter'

const AddModal = (props) => {
    const [amount, setAmount] = useState('')
    const [amountInLocalString, setAmountInLocalString] = useState('')

    const onChangeAmount = (e) => {
        setAmount(e.target.value)

        const number = stringToNumber(e.target.value)
        if (number >= 10000) {
            setAmountInLocalString(numberToKorean(number / 10000))
        }
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
                        onChange={onChangeAmount}
                        value={
                            stringToNumber(amount) >= 10000
                                ? numberFormatWithComma(stringToNumber(amount))
                                : amount
                        }
                    />
                    <div>{amountInLocalString}</div>
                    <p>paragraph body</p>
                    <button onClick={props.onClose}>close</button>
                    <button>comfirm</button>
                </div>
            </div>
        </div>
    )
}

export default AddModal
