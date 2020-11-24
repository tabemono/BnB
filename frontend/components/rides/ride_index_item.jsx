import React from "react";
import Carousel from "nuka-carousel";
import { Link, withRouter } from "react-router-dom";

class RideIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props
      .requestRide(this.props.ride.id)
      .then(this.props.history.push(`/rides/${this.props.ride.id}`));
  }

  render() {
    const { ride } = this.props;
    const { description, model, brand, price, style } = ride;
    const rideCaro = (
      <div className="ride-photo-container" key={ride.id}>
        <Carousel
          width={"15vw"}
          height="350px"
          wrapAround={true}
          heightMode={"first"}
          transitionMode={"scroll3d"}
        >
          {ride.photoUrls.map((photo) => {
            return (
              <img
                onClick={() => this.handleClick()}
                src={photo}
                key={photo}
              ></img>
            );
          })}
        </Carousel>
      </div>
    );

    return (
      <li className="ride-index-item">
        {/* <Link to={`/rides/${ride.id}`}> */}
        {rideCaro}
        <div className="index-text-desc" onClick={() => this.handleClick()}>
          <section className="ride-desc">
            <p>{description}</p>
            <h3>{ride.model}</h3>
          </section>

          <section className="ride-desc2">
            <p>
              {brand}-{style}
            </p>
          </section>

          <section className="ride-price">
            <p>
              <strong>${price}</strong> / day
            </p>
          </section>
        </div>
        {/* </Link> */}
      </li>
    );
  }
}

export default withRouter(RideIndexItem);
