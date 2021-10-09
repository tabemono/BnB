import React from "react";
import { Link, Redirect } from "react-router-dom";

class LoginDrop extends React.Component {
  signOutAction(e) {
    this.props.logout().then(<Redirect to="/" />);
  }

  render() {
    const userId = this.props.currentUser.id;
    return (
      <ul className="drop-menu">
        <li>
          <Link to={`/${userId}/bookings`}>Trips</Link>
        </li>
        <li>
          <a onClick={this.signOutAction.bind(this)}>Log Out</a>
        </li>
      </ul>
    );
  }
}

export default LoginDrop;
