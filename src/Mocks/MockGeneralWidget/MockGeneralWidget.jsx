import React from 'react';
import { Wedge } from '../../components';
import './MockGeneralWidget.css';

export const MockGeneralWidget = () => <Wedge>
        <div className="general-container">
            <h1>Widget Label</h1>
            <p className="general-widget">The first Wedge</p>
        </div>
    </Wedge>