import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render() {
    // debugger
    return (
        this.props.currentUser ? (
            <div>
                <p>
                Welcome, {this.props.currentUser.name}
                </p>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )  :( <div>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
            </div>
        )
    )
  }
}

export default Greeting;