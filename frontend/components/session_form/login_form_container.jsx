import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = ({ session, errors, entities: { users } }) => {
  return {
    user: {
      email: "",
      password: "",
      error: "",
    },
    errors: errors.session,
    currentUser: users[session.currentUserId],
    formType: "Log in",
    status_text: "Don't have an account?",
    navLink: <Link to="/signup">Sign Up</Link>,
    demoUser: {
      email: "demo@aa.com",
      password: "123456",
    },
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button
        className="other-form-btn"
        onClick={() => dispatch(openModal("signup"))}
      >
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
