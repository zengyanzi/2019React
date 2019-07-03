import {HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import Home from './Home';
import User from './User';
import Profile from './Profile';

export default (
    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            User managment system
                        </div>
                    </div>
                    <ul className="nav navbar-nav">
                       <li><Link to="/home">Home</Link></li>
                        <li><Link to="/user">User</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Route path="/home" component={Home}/>
                        <Route path="/user" component={User}/>
                        <Route path="/profile" component={Profile}/>
                    </div>
                </div>
            </div>

        </div>
    </Router>
)