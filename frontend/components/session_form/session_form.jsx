import React from "react";
import { withRouter } from "react-router-dom";
import { BsFillXCircleFill } from "react-icons/bs";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const header = this.props.formType === "Log in" ? "Log In" : "Sign Up";
    const isSignedUp = this.props.formType === "Sign Up";
    const fname = () => {
      return (
        <input
          type="text"
          placeholder="First Name"
          value={this.state.firstname}
          onChange={this.update("firstname")}
          className="login-input"
        />
      );
    };
    const demoLog = () => {
      return (
        <button
          className="session-submit"
          onClick={() =>
            this.props
              .login({ email: "demo@aa.com", password: "123456" })
              .then(this.props.closeModal)
          }
        >
          Demo
        </button>
      );
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="input-box">
          <header className="modal-header">
            Bikes and Bikers
            <div onClick={this.props.closeModal} className="close-x">
              <BsFillXCircleFill />
            </div>
          </header>
          {this.renderErrors()}
          <div className="input-container">
            <div className="login-form">
              {isSignedUp ? fname() : null}

              <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />

              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            
              {this.props.formType === 'Log in' ? demoLog() : null}
              
              <input
                className="session-submit"
                type="submit"
                value={this.props.formType}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
