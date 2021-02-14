import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "../search_bar/search_bar_container";
import { withRouter } from "react-router-dom";
// import DateSearch from './date_search';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: false };
  }

  render() {
    const handleRidesClick = () =>
      this.props.history.push(`/${this.props.currentUser.id}/bookings`);

    const navDisplay = this.props.currentUser ? (
      <div className="outerDiv">
        {/* <div className="social-media">
          <a className="git" href="https://github.com/tabemono">
            <i className="fab fa-github"></i>
          </a>
          <a
            className="personal-social"
            href="https://www.linkedin.com/in/tony-chen-830850201/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div> */}
        <div className="inner-div">
          {/* {this.props.currentUser.firstname} */}
          <div className="social-media">
            <a className="git" href="https://github.com/tabemono">
              <img src={window.github}></img>
            </a>
            <a
              className="personal-social"
              href="https://www.linkedin.com/in/tony-chen-830850201/"
            >
              <img src={window.linkedIn}></img>
            </a>
            <button className="logout-btn" onClick={this.props.logout}>
              Log Out
            </button>
            <button className="logout-btn" onClick={handleRidesClick}>
              Rides
            </button>
          </div>
        </div>
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
    );

    return (
      <header className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={window.logo} className="logo"></img>
          </Link>
        </div>
        <div className="search-nav">
          <SearchBarContainer />
        </div>
        <div className="right-nav">
          <div className="nav-2">{navDisplay}</div>
        </div>
      </header>
    );
  }
}

export default withRouter(NavBar);
