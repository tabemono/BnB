import { connect } from "react-redux";
import React from "react";
import { signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import {withRouter} from 'react-router-dom';
import SessionForm from "./session_form";

const mstp = ({ session, errors, entities: {users} }) => {
  return {
    errors: errors.session,
    formType: "Sign Up",
    currentUser: users[session.currentUserId],
    status_text: 'Already have an BnB account?'
  };
};

const mdtp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button className= 'other-form-btn'onClick={() => dispatch(openModal("login"))}>Login</button>
    ),
    closeModal: () => dispatch(closeModal()),
    // clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mstp, mdtp)(SessionForm);
