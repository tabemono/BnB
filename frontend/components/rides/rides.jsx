import React from "react";

class Rides extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRides();
  }

  render() {
    const rideTags = this.props.rides.map((ride) => {
      return (
        <div className="ride-photo-container" key={ride.id}>
          {ride.photoUrls.map((photo) => {
            return <img className="ride-photo" src={photo} key={photo}></img>;
          })}
          <li>{ride.model}</li>
          <li>{ride.brand}</li>
          <li>{ride.price}</li>
          <li>{ride.description}</li>
        </div>
      );
    });
    return (
      <div>
        <h1> THIS PAGE IS UNDER CONSTRUCTION</h1>
        {rideTags}
      </div>
    );
  }
}

export default Rides;
