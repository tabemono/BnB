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
            <h1>BnB</h1>
            <GreetingContainer />
            <Modal/>
            <Switch>
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignUpContainer} />
            </Switch>

        </header>
    </div>
);

export default App;