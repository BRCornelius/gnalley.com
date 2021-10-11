import React from 'react';
import { Wedge } from '../../components';
import { Contact } from '../../components/Contact/Contact';
import './MockContactWidget.css';

export const MockContactWidget = () => <Wedge>
    <div className="contact-container">
        <h3>Contact Us!<br/><small>Send us an email and we will get back to you as soon as possible.</small></h3>
        <Contact />
    </div>
</Wedge>