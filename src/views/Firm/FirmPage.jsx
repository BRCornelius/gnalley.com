import React from 'react';
import { ClientsWidget, FirmWidget } from '../../widgets';
import './FirmPage.css';

export const FirmPage = () => <div className="single-page-container">
    <FirmWidget />
    <ClientsWidget />
</div>;