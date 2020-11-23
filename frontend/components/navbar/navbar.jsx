import React from "react";
import { Link } from "react-router-dom";
import  SearchBarContainer  from '../search_bar/search_bar_container';
import { withRouter } from 'react-router-dom';
class NavBar extends React.Component {
  render() {
    const navDisplay =  this.props.currentUser ? (
            <div className="outerDiv">
              <p>{this.props.currentUser.firstname}</p>
              <button onClick={this.props.logout}>Log Out</button>
            </div>
          ) : (
            <div className="right-nav">
              <div
                className="nav-signin"
                onClick={() => this.props.openModal("login")}
              >
                Login
              </div>
              &nbsp;&nbsp;
              <div
                className="nav-signin"
                onClick={() => this.props.openModal("signup")}
              >
                Signup
              </div>
            </div>
          )

    return (
      <header className='navbar'>
          <Link to="/"><img src={window.logo} className="logo"></img></Link>
        <div className="left-nav">
        </div>
          <div className="search-nav">
            <SearchBarContainer/>
          </div>
          <div className='right-nav'>
          <div className='nav-2'>{navDisplay}</div>
          </div>
      </header>
    );
  }
}

export default withRouter(NavBar);