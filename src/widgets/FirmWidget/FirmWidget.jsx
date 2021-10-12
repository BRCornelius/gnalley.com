import React from 'react';
import { Wedge } from '../../components';
import './FirmWidget.css';

export const FirmWidget = () => <Wedge>
    <div className="outer-container">
        <h1>Who we are</h1>
        <div className="general-container">
            <p className="general-widget">Founded in 1990 by George Nalley, <strong>Nalley and Dew, APLC</strong> is a Louisiana law firm with a global perspective.</p>
            <p>We are litigation centered, with extensive experience in all areas of casualty litigation, including maritime, products liability, and environmental law issues, as well as state and federal workers’ compensation.</p>
            <p>We have a strong foundation in employment and labor law litigation and insurance coverage issues.</p>
            <p>We have been privileged to represent our clients in a variety of civil and maritime business disputes, including construction and contractor litigation, and civil RICO.</p>
            <p>While our practice is predominately in Louisiana, our attorneys are licensed in Louisiana, Mississippi, Texas, and Florida, and Nalley and Dew has tried and/or handled cases in numerous other states, including Tennessee and Ohio.</p>
            <p>We proudly represent clients in both defense and plaintiff litigation matters.</p>
        </div>
    </div>
    </Wedge>