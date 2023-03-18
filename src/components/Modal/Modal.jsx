import React from 'react'
import { useState } from 'react'
import { ReactComponent as Close } from "../../assets/images/arrowIcon.svg";

import './Modal.css'

function Modal({
    title,
    children,
    toggle,
    onSubmit,
    submitBtnText,
    key
}) {
    const [toggleState, setToggleState] = useState(toggle)

    return (
        <>
            <div className={`back-drop ${toggleState ? "show" : "hide"}`} key={key} onClick={() => {
                setToggleState((prev) => !prev)
            }}>
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-header">
                            <h2 className="modal-title">{title}</h2>
                            <Close onClick={() =>
                                setToggleState((prev) => !prev)
                            } />
                        </div>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <button
                                className="modal-submit"
                                onClick={() => {
                                    onSubmit()
                                    setToggleState((prev) => !prev)
                                }}
                            >
                                {submitBtnText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal