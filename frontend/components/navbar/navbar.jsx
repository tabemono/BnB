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
      <div className="right-nav">
        <div className="nav-btn" onClick={this.props.logout}>
          Log Out
        </div>
        <div className="nav-btn" onClick={handleRidesClick}>
          Rides
        </div>
      </div>
    ) : (
      <div className="right-nav">
        <div className="nav-btn" onClick={() => this.props.openModal("login")}>
          Login
        </div>
        &nbsp;&nbsp;
        <div className="nav-btn" onClick={() => this.props.openModal("signup")}>
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
          <div className="nav-2">
            <a className="git" href="https://github.com/tabemono">
              <img src={window.github}></img>
            </a>
            <a
              className="personal-social"
              href="https://www.linkedin.com/in/tony-chen-830850201/"
            >
              <img src={window.linkedIn}></img>
            </a>
            {navDisplay}
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(NavBar);
