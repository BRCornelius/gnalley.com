import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Contact.css';

export const InputContainer = ({children}) => <div className="input-container">{children}</div>

export const TextInput = ({label, stateValue, clickFunction, id}) => <InputContainer>
        <label for={id}>{label}</label>
        <input type="text" id={id} name={id} value={stateValue} onChange={event => clickFunction(event.target.value)}/>
    </InputContainer>;
export const RadioInput =({checkSelection, setSelection}) => <div className="radio-input-container">
        <label className="button-label">Are you a new client?</label>
        <div className="button-container">
            <button className={checkSelection("yes") ? "active" : "inactive"} onClick={() => setSelection("yes")}>Yes</button>
            <button className={checkSelection("no") ? "active" : "inactive"} onClick={() => setSelection("no")}>No</button>
        </div>
    </div>;

export const Contact = ({isWidget}) => {
    const [selection, setSelection] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const checkSelection = targetValue => targetValue === selection;
    const history = useHistory();
    const handleNavigation = () => {
        history.push("/contact");
    }

    let header = isWidget
        ? <h3>Contact Us!<br/><small>Send us an email and we will get back to you as soon as possible.</small></h3>
        : <h1>Email us:</h1>

    const SubmitButton = () => <div className="submit-button-container">
        <button className="submit-button" onClick={() => console.log(firstName)}>Submit</button>
    </div>

    return <div className="overarch-contact-container">
        {header}
        <div className="container-row">
            <div className="column">
                <div className="two-input-container">
                    <TextInput label="First Name" stateValue={firstName} clickFunction={setFirstName} id="first-name" />
                    <TextInput label="Last Name" stateValue={lastName} clickFunction={setLastName} id="last-name" />
                </div>
                <div className="two-input-container">
                    <TextInput label="Email" stateValue={email} clickFunction={setEmail} id="email" />
                    <TextInput label="Phone Number" stateValue={phone} clickFunction={setPhone} id="phone" />
                </div>
                <RadioInput checkSelection={checkSelection} setSelection={setSelection} />
            </div>
            <div className="column">
                <div className="input-message-container">
                    <label for="message">Message:</label>
                    <textarea type="text" id="message" value={message} onChange={event => setMessage(event.target.value)}/>
                </div>
                {isWidget && <SubmitButton />}
            </div>
        </div>
        {isWidget && <h3><button onClick={handleNavigation}>Click Here</button> for other ways to contact us.</h3>}
        {!isWidget && <SubmitButton />}
    </div>
}