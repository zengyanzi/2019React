import {HashRouter as Router,
    Route
} from "react-router-dom";
import React from "react";
import Home from './Home';
import User from './User';
import Profile from './Profile';

export default (
    <Router>
        <div>
            <Route path="/home" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/profile" component={Profile}/>
        </div>
    </Router>
)