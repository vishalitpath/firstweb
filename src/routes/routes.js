import React from 'react';
import {
    Switch, Route, BrowserRouter
} from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Homepage from '../pages/home';
import Aboutus from '../pages/about';
import Clock from "../pages/clock";
import DisplayDetails from "../pages/apiCall";
import SideMenu from "../shared/layout/sidemenu/sidemenu";
import Content from "../shared/layout/content";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/about" component={Aboutus} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/clock" component={Clock} />
                <Route path="/displaydetails" component={DisplayDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;