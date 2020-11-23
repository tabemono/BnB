import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ( {errors} ) => {
    
    return {
        user: {
            email: "",
            password: ""
        } ,
        
        demoUser: {
            email: "demo@aa.com",
            password: "123456"
        },

        errors: errors.session,
        formType: 'Log in',
        
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        login: user => dispatch(login(user))
    };
};


export default connect(mSTP, mDTP)(SessionForm);