import React from "react";
import { withRouter } from "react-router-dom";
import { BsFillXCircleFill } from "react-icons/bs";
import { IoMdPerson, IoIosMail } from "react-icons/io";
import { FiLock } from "react-icons/fi";
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    // this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    this.props.processForm(this.state).then(this.props.closeModal);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li className="session-errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const header = this.props.formType === "Log in" ? "Log In" : "Sign Up";
    const isSignedUp = this.props.formType === "Sign Up";
    const fname = () => {
      return (
        <div className="signup-input">
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstname}
            onChange={this.update("firstname")}
            className="login-input"
          />
          <i>
            <IoMdPerson />
          </i>
        </div>
      );
    };
    const demoLog = () => {
      return (
        <button
          className="session-submit"
          onClick={() =>
            this.props 
              .processForm({ email: "demo@aa.com", password: "123456" })
              .then(this.props.closeModal)
          }
        >
          Demo
        </button>
      );
    };

    return (
      <div>
        <header className="modal-header">{header}</header>
        <div className="signup-errors">{this.renderErrors()}</div>
        <button onClick={this.props.closeModal} className="close-x">
          <BsFillXCircleFill />
        </button>
        <form onSubmit={this.handleSubmit} className="input-box">
          <div className="input-container">
            {isSignedUp ? fname() : null}
            <div className="signup-input">
              <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
              <i>
                <IoIosMail />
              </i>
            </div>
            <div className="signup-input">
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
              <i>
                <FiLock />
              </i>
            </div>
            {this.props.formType === "Log in" ? demoLog() : null}

            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
          <div className="other-form">
            {this.props.status_text}
            <br />
            {this.props.otherForm}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
