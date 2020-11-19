import React from "react";
import { Link } from "react-router-dom";

export default function splash_page() {
  return (
    <div>
      <h1 className="welcome">Find The Perfect Ride</h1>
      <div width="100%" height="50%">
        <img
          autoPlay
          muted
          loop
          className="splash-image"
          src={window.splashvid}
        ></img>
        <div className="header-content">
          <div className="look-btn">
            <Link to="/rides">Look Around</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
