import React from "react";
import { Link, Redirect } from "react-router-dom";

const LoggedIn = ({ currentUser, logout }) => {
  const signOutAction = () => {
    logout().then(<Redirect to="/" />);
  };

  const userId = currentUser;
  return (
    <ul className="drop-menu">
      <li>
        <Link to={`/${userId}/bookings`}>Bookings</Link>
      </li>
      <li>
        <a onClick={signOutAction}>Log Out</a>
      </li>
    </ul>
  );
};

export default LoggedIn;
