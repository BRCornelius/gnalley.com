import React, { useState } from 'react';
import './Contact.css';

const InputContainer = ({children}) => <div className="input-container">{children}</div>

export const Contact = ({isWidget}) => {
    const [selection, setSelection] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const checkSelection = targetValue => targetValue === selection;

    const SubmitButton = () => <div className="submit-button-container">
        <button className="submit-button" onClick={() => {}}>Submit</button>
    </div>

    return <div className="overarch-contact-container">
        <h3>Contact Us!<br/><small>Send us an email and we will get back to you as soon as possible.</small></h3>
        <div className="container-row">
            <div className="column">
                <div className="two-input-container">
                    <InputContainer>
                        <label for="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name" value={firstName} onChange={event => setFirstName(event.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <label for="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name" value={lastName} onChange={event => setLastName(event.target.value)}/>
                    </InputContainer>
                </div>
                <div className="two-input-container">
                    <InputContainer>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    </InputContainer>
                    <InputContainer>
                        <label for="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" value={phone} onChange={event => setPhone(event.target.value)}/>
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
                    <textarea type="text" id="message" value={message} onChange={event => setMessage(event.target.value)}/>
                </div>
                {isWidget && <SubmitButton />}
            </div>
        </div>
        {isWidget && <h3><button>Click Here</button> for other ways to contact us.</h3>}
        {!isWidget && <SubmitButton />}
    </div>
}