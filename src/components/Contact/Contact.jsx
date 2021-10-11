import React, { useState } from 'react';
import './Contact.css';

const InputContainer = ({children}) => <div className="input-container">{children}</div>

export const Contact = () => {
    const [selection, setSelection] = useState("")
    const checkSelection = targetValue => targetValue === selection;

    return <div className="container-row">
        <div className="column">
            <div className="two-input-container">
                <InputContainer>
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" />
                </InputContainer>
                <InputContainer>
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" />
                </InputContainer>
            </div>
            <div className="two-input-container">
                <InputContainer>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" />
                </InputContainer>
                <InputContainer>
                    <label for="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" />
                </InputContainer>
            </div>
            <div className="radio-input-container">
                <label className="button-label">Are you a new client?</label>
                <div className="button-container">
                    <button className={checkSelection("yes") ? "active" : "inactive"} onClick={() => setSelection("yes")}>Yes</button>
                    <button className={checkSelection("no") ? "active" : "inactive"} onClick={() => setSelection("no")}>No</button>
                </div>
            </div>
        </div>
        <div className="column">
            <div className="input-message-container">
                <label for="message">Message:</label>
                <input className="contact-message" type="text" id="message" />
            </div>
        </div>
    </div>
}