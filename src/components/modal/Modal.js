
import React from 'react';
import "./Modal.css"

const Modal = ({ children, className, show, closeModal }) => (
    <div className={`modal ${className}`} style={{ display: show ? 'block' : 'none'}}>
        <div className="modal-content">
            {children}
            <span className="close" onClick={ closeModal }>
                &times;
            </span>
        </div>
    </div>
);
export default Modal;