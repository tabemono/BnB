import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "../search_bar/search_bar_container";
import { withRouter } from "react-router-dom";
// import DateSearch from './date_search';
import { BsSearch } from "react-icons/bs";

class NavBar extends React.Component {
  render() {
    const navDisplay = this.props.currentUser ? (
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
          <div id="search-badge">
            <button className="search-button">
              <i className="fas fa-search">
                <BsSearch />
              </i>
            </button>
          </div>
        </div>
        <div className="right-nav">
          <div className="nav-2">{navDisplay}</div>
        </div>
      </header>
    );
  }
}

export default withRouter(NavBar);
