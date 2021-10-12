import React from 'react';
import { Contact } from '../../components';
import './ContactPage.css';

export const ContactPage = () => <div className="single-page-container">
    <h1>Contact Page</h1>
    <Contact isWidget={false}/>
</div>;