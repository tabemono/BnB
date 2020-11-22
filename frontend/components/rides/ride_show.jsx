import React from "react";

class RideShow extends React.Component {
  componentDidMount() {
    this.props.fetchRide(this.props.match.params.rideId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.rideId !== this.props.match.params.rideId) {
      this.props.fetchRide(this.props.match.params.rideId);
    }
  }

  render() {
    const { ride } = this.props;

    return (
      <section className="ride-header">
        <h2>
          {ride.model} : {ride.brand}
        </h2>
        <div className="ride-minor-details">
          <span>
            Style:{ride.style} Located in: {ride.borough}
          </span>
        </div>
        <section className="ride-images-container">
          {/* <div className="ride-img-grid"> */}
          <div className="ride-thumb-img">
            <img className="thumb-img" src={ride.photoUrls[0]} />
          </div>
          <div className="ride-side-one">
            <img className="photo-top1" src={ride.photoUrls[1]} />
            <img className="photo-top2" src={ride.photoUrls[2]} />
          </div>
          <div className="ride-side-two">
            <img className="photo-bot1" src={ride.photoUrls[3]} />
            <img className="photo-bot2" src={ride.photoUrls[4]} />
          </div>
          {/* </div> */}
        </section>
        <h2>Description</h2>
        {ride.description}
      </section>
    );
  }
}

export default RideShow;
