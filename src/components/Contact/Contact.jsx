import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/global-context';
import { isMobile } from '../../utils';
import { ConfirmationModal } from './ConfirmationModal';
import './Contact.css';

export const InputContainer = ({children}) => <div className={isMobile ? "mobile-input-container" : "input-container"} data-testid="input-field">{children}</div>

export const TextInput = ({label, stateValue, clickFunction, id}) => <InputContainer>
        <label>{label}</label>
        <input type="text" id={id} name={id} value={stateValue} onChange={event => clickFunction(event.target.value)}/>
    </InputContainer>
export const RadioInput = ({checkSelection, setSelection}) => <div className="radio-input-container" data-testid="input-field">
        <label className="button-label">Are you a new client?</label>
        <div className="button-container">
            <button className={checkSelection("yes") ? "active" : "inactive"} onClick={() => setSelection("yes")}>Yes</button>
            <button className={checkSelection("no") ? "active" : "inactive"} onClick={() => setSelection("no")}>No</button>
        </div>
    </div>
export const MessageInput = ({label, stateValue, clickFunction, id}) => <div className="input-message-container" data-testid="input-field">
        <label>{label}</label>
        <textarea type="text" id={id} value={stateValue} onChange={event => clickFunction(event.target.value)}/>
    </div>

export const Contact = ({isWidget}) => {
    let {
        email, firstName, lastName, message, newClient, open, phone, setEmail, sendEmail,
        setFirstName, setLastName, setMessage, setNewClient, setOpen, setPhone, emptyContactState
      } = useContext(GlobalContext)
    const toggleConfirmationModal = () => setOpen(!open)
    const checkNewClient = targetValue => targetValue === newClient;
    const history = useHistory();
    const handleNavigation = () => {
        history.push("/contact");
    }
    const handleSubmit = () => {
        toggleConfirmationModal();
        sendEmail();
        emptyContactState();
    }

    let header = isWidget
        ? <h3>Contact Us!<br/><small>Send us an email and we will get back to you as soon as possible.</small></h3>
        : <h1>Email us:</h1>

    const SubmitButton = () => <div className="submit-button-container">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>

    return <div className="overarch-contact-container">
        {!open && <>
            {header}
            {!isMobile && <div className="container-row">
                <div className="column">
                    <div className="two-input-container">
                        <TextInput label="First Name" stateValue={firstName} clickFunction={setFirstName} id="first-name" />
                        <TextInput label="Last Name" stateValue={lastName} clickFunction={setLastName} id="last-name" />
                    </div>
                    <div className="two-input-container">
                        <TextInput label="Email" stateValue={email} clickFunction={setEmail} id="email" />
                        <TextInput label="Phone Number" stateValue={phone} clickFunction={setPhone} id="phone" />
                    </div>
                    <RadioInput checkSelection={checkNewClient} setSelection={setNewClient} />
                </div>
                <div className="column">
                    <MessageInput label="Message" stateValue={message} clickFunction={setMessage} id="message" />
                    {isWidget && <SubmitButton />}
                </div>
            </div>}
            {isMobile && <>
                <TextInput label="First Name" stateValue={firstName} clickFunction={setFirstName} id="first-name" />
                <TextInput label="Last Name" stateValue={lastName} clickFunction={setLastName} id="last-name" />
                <TextInput label="Email" stateValue={email} clickFunction={setEmail} id="email" />
                <TextInput label="Phone Number" stateValue={phone} clickFunction={setPhone} id="phone" />
                <RadioInput checkSelection={checkNewClient} setSelection={setNewClient} />
                <MessageInput label="Message" stateValue={message} clickFunction={setMessage} id="message" />
                <SubmitButton />
            </>}
            {isWidget && <h3 className="more-info-text"><button onClick={handleNavigation}>Click Here</button> for other ways to contact us.</h3>}
            {!isWidget && !isMobile && <SubmitButton />}
        </>}
        {open && <ConfirmationModal toggleFunction={toggleConfirmationModal} /> }
    </div>
}