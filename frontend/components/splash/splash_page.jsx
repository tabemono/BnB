import React from "react";
import { Link } from "react-router-dom";

export default function splash_page() {
  return (
    <div className="splashpage">
      <h1 className="welcome">Find The Perfect Ride</h1>
      <div width="100%" height="50%">
        <img
          autoPlay
          muted
          loop
          className="splash-image"
          src={window.splashvid}
        ></img>
      </div>
      <div className="header-content">
        <div className="look-btn">
          <Link className="look-button" to="/rides">
            Look Around
          </Link>
        </div>
      </div>
      <div className="riding-style">
        <div className="style-col">
          <img src={window.sport} className="style-img"></img>
          <span className="style-title">Sport</span>
          <div className="out-wrap">
            <span className="style-link">
              Like the power and speed? Go for sport.
            </span>
          </div>
        </div>
        <div className="style-col">
          <img src={window.street} className="style-img"></img>
          <span className="style-title">Street</span>
          <div className="out-wrap">
            <span className="style-link">
              Like to commute or cruise the city? Try a naked or cafe racer.
            </span>
          </div>
        </div>
        <div className="style-col">
          <img src={window.touring} className="style-img"></img>
          <span className="style-title">Adventure/Touring</span>
          <div className="out-wrap">
            <span className="style-link">
              Looking to tour the country or a long adventure ride?
            </span>
          </div>
        </div>
        <div className="style-col">
          <img src={window.dirt} className="style-img"></img>
          <span className="style-title">Dirt</span>
          <div className="out-wrap">
            <span className="style-link">Looking to offroad?</span>
          </div>
        </div>
      </div>

      <div className="splash-exp">
        <div className="header-text">
          <span className="exp-header">Experience Adventures</span>
          <p className="exp-para">
            Meet People around the city, experiencing different sceneries
            together or different type of riding with other riders!
          </p>
        </div>
        <div className="splash-exp-area">
          <div className="parent-box1">
            <img src={window.track1} className="big-pic"></img>
            <span className="exp-desc">
              In it for the adrenaline? Join the track experience.
            </span>
          </div>

          <div className="parent-box2">
            <img src={window.offroad} className="side-images"></img>
            <span className="exp-desc">
              Like the unpredictable? Try motorcrossing events/terrains with
              dirtbikes.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
