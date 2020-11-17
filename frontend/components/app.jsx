import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from './session_form/login_form_container';
import GreetingContainer from "./greeting/greeting_container";
import SignUpContainer from './session_form/signup_form_container';


const App = () => (
    <div>
        <header>
            <h1>BnB</h1>
            <GreetingContainer />
            <Route path='/login' component={LoginFormContainer} />
            <Route path='/signup' component={SignUpContainer} />

        </header>
    </div>
);

export default App;