import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
    return (
        <div>
            <Backdrop show={true} clicked={props.onClose} />
            <div className={classes.Modal}>
                <div className={classes.content}>
                    <h3>Modal header</h3>
                    <p>paragraph body</p>
                    <button onClick={props.onClose}>close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
