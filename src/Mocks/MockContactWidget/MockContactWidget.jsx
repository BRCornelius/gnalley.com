import React from 'react';
import { Wedge } from '../../components';
import { Contact } from '../../components/Contact/Contact';
import './MockContactWidget.css';

export const MockContactWidget = () => <Wedge>
    <div className="contact-container">
        <Contact />
    </div>
</Wedge>