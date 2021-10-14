import React, { useRef } from 'react';
import { useOutsideClick } from '../../utils';
import './Contact.css';

export const ConfirmationModal = ({toggleFunction}) => {
    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef, toggleFunction)

    return <div className="modal-container">
        <h3>Thank you for contacting us. A qualified team member will get back to you as soon as we have a chance.</h3>
        <button onClick={toggleFunction} className="modal-close">Close</button>
    </div>
}