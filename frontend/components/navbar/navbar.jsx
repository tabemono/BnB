import React from "react";
import { Link } from "react-router-dom";
import SearchBarContainer from "../search_bar/search_bar_container";
import { withRouter } from "react-router-dom";
import DropDown from "./dropdown";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: false };
  }

  render() {
    // const handleRidesClick = () =>
    //   this.props.history.push(`/${this.props.currentUser.id}/bookings`);

    // const navDisplay = this.props.currentUser ? (
    //   <div className="right-nav">
    //     <div className="nav-btn" onClick={this.props.logout}>
    //       Log Out
    //     </div>
    //     <div className="nav-btn" onClick={handleRidesClick}>
    //       Rides
    //     </div>
    //   </div>
    // ) : (
    //   <div className="right-nav">
    //     <div className="nav-btn" onClick={() => this.props.openModal("login")}>
    //       Login
    //     </div>
    //     &nbsp;&nbsp;
    //     <div className="nav-btn" onClick={() => this.props.openModal("signup")}>
    //       Signup
    //     </div>
    //   </div>
    // );

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
