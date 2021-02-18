import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RideIndexIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ride } = this.props;
    const styleIcon = () => {
      if (ride.style === "Adventure/Touring") {
        return (
          <>
            <li>
              <img id="s-icon" src={window.adv} alt="style-icon"></img>
            </li>
            <li>
              <img
                id="s-icon"
                src="https://bnb-seeds.s3.us-east-1.amazonaws.com/adv-tour.png"
                alt="style-icon"
              ></img>
            </li>
          </>
        );
      } else if (ride.style === "Dirt") {
        return (
          <>
            <li>
              <img id="s-icon" src={window.dirtb} alt="style-icon"></img>
            </li>
            <li>
              <img
                id="s-icon"
                src="https://bnb-seeds.s3.us-east-1.amazonaws.com/offfroad-dirt.png"
                alt="style-icon"
              ></img>
            </li>
          </>
        );
      } else if (ride.style === "Street") {
        return (
          <>
            <li>
              <img id="s-icon" src={window.streetb} alt="style-icon"></img>
            </li>
            <li>
              <img
                id="s-icon"
                src="https://bnb-seeds.s3.us-east-1.amazonaws.com/city.png"
                alt="style-icon"
              ></img>
            </li>
          </>
        );
      } else {
        return (
          <>
            <li>
              <img id="s-icon" src={window.sportb} alt="style-icon"></img>
            </li>
            <li>
              <img
                id="s-icon"
                src="https://bnb-seeds.s3.us-east-1.amazonaws.com/track-icon.jpg"
                alt="style-icon"
              ></img>
            </li>
          </>
        );
      }
    };

    return <div className="ride-index-icons">{styleIcon()}</div>;
  }
}

export default withRouter(RideIndexIcon);
