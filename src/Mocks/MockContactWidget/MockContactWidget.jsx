import React from 'react';
import { Contact, Wedge } from '../../components';
import './MockContactWidget.css';

export const MockContactWidget = () => <Wedge>
    <div className="contact-container">
        <Contact isWidget/>
    </div>
</Wedge>