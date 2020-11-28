import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RideShowDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ride } = this.props;
    const styleIcon = () => {
      if (ride.style === "Adventure/Touring") {
        return (
          <>
            <li className="show-details">
              <span className="show-head">{ride.style}</span>
              <img id="s-icon" src={window.adv} alt="style-icon"></img>
              <span className="show-desc">Great for touring !</span>
            </li>
            <br />
            <li>
              <img
                id="s-icon"
                src="https://bnb-seeds.s3.us-east-1.amazonaws.com/adv-tour.png"
                alt="style-icon"
              ></img>
              <span className="show-desc">
                Mostly used for long distance riding
              </span>
            </li>
          </>
        );
      } else if (ride.style === "Dirt") {
        return (
          <>
            <li className="show-details">
              <span className="show-head">{ride.style}</span>
              <img id="s-icon" src={window.dirtb} alt="style-icon"></img>;
              <span className="show-desc">Meant for the dirt</span>
            </li>
            <br />
            <li>
              <img
                id="s-icon"
                src="https://bnb-seeds.s3.us-east-1.amazonaws.com/offfroad-dirt.png"
                alt="style-icon"
              ></img>
              <span className="shw-desc">
                Mainly used for off-road terrains.
              </span>
            </li>
          </>
        );
      } else if (ride.style === "Street") {
        return (
          <>
            <li className="show-details">
              <span className="show-head">{ride.style}</span>
              <img id="s-icon" src={window.streetb} alt="style-icon"></img>
              <span className="shw-desc">For the Streets.</span>
            </li>
            <br />
            <li>
              <img
                id="s-icon"
                src="https://bnb-seeds.s3.us-east-1.amazonaws.com/city.png"
                alt="style-icon"
              ></img>
              <span className="show-desc">
                Great for city street cruising and commute.
              </span>
            </li>
          </>
        );
      } else {
        return (
          <>
            <li className="show-details">
              <span className="show-head">{ride.style}</span>
              <img id="s-icon" src={window.sportb} alt="style-icon"></img>
              <span className="show-desc">High power and speed.</span>
            </li>
            <br />
            <li>
              <img
                id="s-icon"
                src="https://bnb-seeds.s3.us-east-1.amazonaws.com/track-icon.jpg"
                alt="style-icon"
              ></img>
              <span className="show-desc">Track Ready.</span>
            </li>
          </>
        );
      }
    };

    return <div className="ride-show-details">{styleIcon()}</div>;
  }
}

export default withRouter(RideShowDetail);
