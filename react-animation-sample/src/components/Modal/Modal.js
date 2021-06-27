import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './Modal.css'

const animationTiming = {
    enter: 1000,
    exit: 1000,
}

const Modal = (props) => {
    return (
        <CSSTransition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed',
                // appear:
                // appearActive:
            }}
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>
                    Dismiss
                </button>
            </div>
        </CSSTransition>
    )
}

export default Modal
