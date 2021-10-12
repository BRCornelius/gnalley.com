import React from 'react';
import { Contact, Wedge } from '../../components';
import './ContactWidget.css';

export const ContactWidget = () => <Wedge>
    <div className="contact-container">
        <Contact isWidget/>
    </div>
</Wedge>