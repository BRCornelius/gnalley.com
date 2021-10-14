import React from 'react';
import { Contact, Wedge } from '../../components';
import { isMobile } from '../../utils';
import './ContactWidget.css';

export const ContactWidget = () => <Wedge>
    <div className={isMobile ? "mobile-contact-container": "contact-container"}>
        <Contact isWidget/>
    </div>
</Wedge>