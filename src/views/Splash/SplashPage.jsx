import React from 'react';
import { FirmWidget, TeamWidget, ContactWidget, ClientsWidget, SplashWidget } from '../../widgets';
import './SplashPage.css';

export const SplashPage = () => <div>
    <SplashWidget />
    <FirmWidget />
    <TeamWidget />
    <ContactWidget />
    <ClientsWidget />
    <ContactWidget />
</div>;