import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from './session_form/login_form_container';
import GreetingContainer from "./greeting/greeting_container";
import SignUpContainer from './session_form/signup_form_container';
import { AuthRoute, Protected } from '../util/route_util';
import Modal from "./modal/modal";

const App = () => (
    <div>
        <header>
            <h1>Bikes and Bikers</h1>
            <img src={window.logo} className="logo"></img>
            
            <GreetingContainer />
            <Modal/>
            <Switch>
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignUpContainer} />
            </Switch>
            <div width="100%" height="50%">
                <img autoPlay muted loop className="splash-image" src={window.splashvid}></img>
            </div>
        </header>
    </div>
);

export default App;