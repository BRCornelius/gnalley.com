import React from 'react';
import { Contact } from '../../components';
import './ContactPage.css';

export const ContactPage = () => <>
    <Contact isWidget={false}/>
    <div className="two-columns">
        <div className="vertical-column">
            <h1 className="contact-title">Call us:</h1>
            <h3>Phone: (504) 838-8188<br/>Fax: (504) 838-0008</h3>
        </div>
        <div className="vertical-column">
            <h1 className="contact-title">Our office:</h1>
            <h3>2450 Severn Avenue<br/>Suite 100<br/>Metairie, LA 70001</h3>
        </div>
    </div>
</>;