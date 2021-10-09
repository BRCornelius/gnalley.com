import React from 'react';
import './Contact.css';

export const Contact = () => <>
    <div className="column-one">
        <div className="two-input-container">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
        </div>
        <div clasNames="two-input-container">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" />
        </div>
        <div className="radio-input-container">
            <label for="new-client">Are you a new customer?</label>
            <input type="radio" is="new-client" name="new-client" />
        </div>
    </div>
</>