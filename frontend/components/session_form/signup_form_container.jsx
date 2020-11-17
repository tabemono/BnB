import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    }
}


export default connect(mSTP, mDTP)(SessionForm);