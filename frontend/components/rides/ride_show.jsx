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
          {ride.brand} : {ride.model}
        </h2>
        <div className="ride-minor-details">
          <span>
            Style:{ride.style} Located in: {ride.city}
          </span>
        </div>
        <section className="ride-images-container">
          <div className="ride-thumb-img">
            <img width="100%" className="thumb-img" src={ride.photoUrls[0]} />
          </div>

          <div className="ride-show-small">
            <div className="ride-side-photos">
              <img className="photo-top" src={ride.photoUrls[1]} />
              <img className="photo-top" src={ride.photoUrls[2]} />
            </div>

            <div className="ride-side-photos">
              <img className="photo-bot" src={ride.photoUrls[3]} />
              <img className="photo-bot" src={ride.photoUrls[4]} />
            </div>
          </div>
        </section>
        <h2>Description</h2>
        {ride.description}
      </section>
    );
  }
}

export default RideShow;
