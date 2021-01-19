import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
class Splash extends React.Component {
  constructor(props) {
    {
      super(props);
    }
  }

  render() {
    return (
      <div className="splashpage">
        <div className="banner">
          <div className="header-content">
            <h1 className="welcome">Find The Perfect Ride</h1>
          </div>
          <div width="100%" height="50%">
            <img
              autoPlay
              muted
              loop
              className="splash-image"
              src={window.splashvid}
            ></img>
          </div>
        </div>
        <div className="look-btn">
          <Link className="look-button" to="/rides">
            Look Around
          </Link>
        </div>
        <div className="riding-style">
          <div className="style-col">
            <img src={window.sport} className="style-img"></img>
            <span className="style-title">Sport</span>
            <div className="out-wrap">
              <span className="style-link">Like the power and speed?</span>
            </div>
          </div>
          <div className="style-col">
            <img src={window.street} className="style-img"></img>
            <span className="style-title">Street</span>
            <div className="out-wrap">
              <span className="style-link">
                Like to commute or cruise the city?
              </span>
            </div>
          </div>

          <div className="style-col">
            <img src={window.touring} className="style-img"></img>
            <span className="style-title">Adventure/Touring</span>
            <div className="out-wrap">
              <span className="style-link">Looking for a long ride?</span>
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
            <span className="exp-header">Experiences</span>
            <p className="exp-para">
              Meet People around the city, experiencing different sceneries
              together or different type of riding with other riders!
            </p>
          </div>

          <div className="splash-exp-area">
            <div className="parent-box1">
              <img src={window.track1} className="big-pic"></img>
              <div className="parent-desc-box1">
                <span className="exp-desc">
                  In it for the adrenaline? Join the track experience.
                </span>
              </div>
            </div>

            <div className="topgrid">
              <div className="parent-box2-container">
                <div className="parent-box2">
                  <img src={window.group} className="side-images"></img>
                  <div className="parent-desc-box">
                    <span className="exp-desc">
                      Checkout nearby group meetups! Meet new riders.
                    </span>
                  </div>
                </div>

                <div className="parent-box2">
                  <img src={window.learn} className="side-images"></img>
                  <div className="parent-desc-box">
                    <span className="exp-desc">
                      Take care of your bike, join a maintenance class!
                    </span>
                  </div>
                </div>
              </div>
              <div className="parent-box2-container">
                <div className="parent-box2">
                  <img src={window.offroad} className="side-images"></img>
                  <div className="parent-desc-box">
                    <span className="exp-desc">
                      Like the unpredictable? Try motorcrossing events!
                    </span>
                  </div>
                </div>
                <div className="parent-box2">
                  <img src={window.stunt} className="side-images"></img>
                  <div className="parent-desc-box">
                    <span className="exp-desc">
                      Experience stunt shows or learn it from experienced
                      riders.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  type: "splash",
});

export default withRouter(connect(mapStateToProps, null)(Splash));
