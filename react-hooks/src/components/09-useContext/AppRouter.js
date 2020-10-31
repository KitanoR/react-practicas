import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import {AboutScreen} from './AboutScreen';
import {LoginScreen}  from './LoginScreen';
import {HomeScreen} from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route path="/about" exact component={AboutScreen} />
                        <Route path="/login" exact component={LoginScreen} />
                        <Route path="/" exact component={HomeScreen} />
                        <Redirect to="/" />
                    </Switch>
                </div>
                
            </div>
        </Router>
    )
}
