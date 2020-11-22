import React from "react";
import Carousel from "nuka/carousel";
import { withRouter } from "react-router-dom";
class RidesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.history.push(`/rides/${this.props.ride.id}`);
  }

  render() {
    const { rides } = this.props;
    const { model, brand, price, description, photoUrls, borough } = ride;
    return (
      <li className="ride-index-item" onClick={this.handleSubmit}>
        {/* <div className="ride-desc">
          <div className="ride-img">{photoUrls}</div>
          <div className="ride-model">{model}</div>
          <div className="ride-brand">{brand}</div>
          <div className="ride-description">{description}</div>
          <div className="ride-borough">{borough}</div>
          <div className="ride-price">{price}</div>
        </div> */}
      </li>
    );
  }
}

export default withRouter(RidesIndexItem);
