import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Update from '../pages/UpdateInfo';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/list" component={Repository} />
        <Route path="/update/:id+" component={Update} />
    </Switch>
);

export default Routes;
