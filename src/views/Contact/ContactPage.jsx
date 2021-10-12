import React from 'react';
import { Contact } from '../../components';
import './ContactPage.css';

export const ContactPage = () => <div className="single-page-container">
    <Contact isWidget={false}/>
    <div className="two-columns">
        <div className="vertical-column">
            <h1>Call us:</h1>
        </div>
        <div className="vertical-column">
            <h1>Our office:</h1>
            <p>2450 Severn Avenue<br/>Suite 100<br/>Metairie, LA 70001</p>
        </div>
    </div>
</div>;