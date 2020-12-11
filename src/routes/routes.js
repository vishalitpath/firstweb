import React from 'react';
import {
    Switch, Route, BrowserRouter
} from 'react-router-dom';

import AboutUs from '../pages/about';
import Async from "react-code-splitting";

const Homepage = () => <Async load={import("../pages/home")} />;
const Dashboard = () => <Async load={import("../pages/dashboard")} />;
const DisplayDetails = () => <Async load={import("../pages/displayDataFromApi")} />;
const Clock = () => <Async load={import("../pages/clock")} />;
const LoginPage = () => <Async load={import("../pages/loginControl/login")} />;

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/about" component={AboutUs} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/clock" component={Clock} />
                <Route path="/displayDetails" component={DisplayDetails} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;