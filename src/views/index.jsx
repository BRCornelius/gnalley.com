import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContactPage } from './Contact/ContactPage';
import { TeamPage } from './Team/TeamPage';
import { FirmPage } from './Firm/FirmPage';
import { SplashPage } from './Splash/SplashPage';

export const PageView = () => <Switch>
    <Route path="/contact">
        <ContactPage />
    </Route>
    <Route path="/team">
        <TeamPage />
    </Route>
    <Route path="/firm">
        <FirmPage />
    </Route>
    <Route path="/">
        <SplashPage />
    </Route>
</Switch>