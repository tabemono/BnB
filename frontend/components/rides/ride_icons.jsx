import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RideIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ride } = this.props;
    const styleIcon = () => {
      if (ride.style === "Adventure/Touring") {
        return <img id="s-icon" src={window.adv} alt="style-icon"></img>;
      } else if (ride.style === "Dirt") {
        return <img id="s-icon" src={window.dirtb} alt="style-icon"></img>;
      } else if (ride.style === "Street") {
        return (
          <ul className='ride-icons'>
            <img id="s-icon" src={window.streetb} alt="style-icon"></img>
            <img
              id="s-icon"
              src="https://bnb-seeds.s3.us-east-1.amazonaws.com/city.png"
              alt="style-icon"
            ></img>
          </ul>
        );
      } else {
        return (
          <ul className='ride-icons'>
            <img id="s-icon" src={window.sportb} alt="style-icon"></img>
            <img
              id="s-icon"
              src="https://bnb-seeds.s3.us-east-1.amazonaws.com/track-icon.jpg"
              alt="style-icon"
            ></img>
          </ul>
        );
      }
    };

    return <div>{styleIcon()}</div>;
  }
}

export default withRouter(RideIcon);
