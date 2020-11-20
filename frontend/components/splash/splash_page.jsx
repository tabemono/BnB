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
      <div className="riding-style">
        <div className="splash-col"></div>
      </div>

      <div className="splash-exp">
        <span className="exp-header">Experience Adventures</span>
        <p className="exp-para">
          Meet People around the city, experiencing different sceneries together
          or different type of riding with other riders!
        </p>
        <div className="splash-exp-area">
          <div className="parent-box">
            <img src={window.track1} className="big-pic"></img>
            <span className="exp-desc">
              In it for the adrenaline? Join the track experience.
            </span>
          </div>
          <div className="parent-box2">
            <img src={window.offroad} className="side-images"></img>
            <span className="exp-desc">
              Like the unpredictable? Try offroading with dirtbikes.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
