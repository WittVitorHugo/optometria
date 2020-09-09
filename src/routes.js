import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// páginas
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import MissingPage from './pages/missing-page';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/" exact />
                <Route component={Register} path="/register" exact />
                <Route component={Dashboard} path="/dashboard" exact />
                <Route component={MissingPage} />
                {/* 
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
                */}
            </Switch>
        </BrowserRouter>
    )
}