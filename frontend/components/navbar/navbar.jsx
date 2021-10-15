import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "../search_bar/search_bar_container";
import { withRouter } from "react-router-dom";
import DropDown from "./nav_dropdown";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: false };
  }

  render() {
  
    return (
      <header className="navbar">
        <nav className="nonsplash-nav">
          <Link id="logo" to="/">
            <img src={window.logo} className="logo"></img>
            <h1>Bikes & Bikers</h1>
          </Link>
          <div className="search-nav">
            <SearchBarContainer />
          </div>
          <DropDown />
        </nav>
      </header>
    );
  }
}

export default withRouter(NavBar);
