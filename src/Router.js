import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from './pages/Search';
import Profile from './pages/Profile';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/profile" component={Profile} />
                
            </Switch>
        </BrowserRouter>
    );
}