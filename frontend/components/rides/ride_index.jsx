import React from "react";
import Carousel from 'nuka-carousel';

class RideIndex extends React.Component {
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
          <Carousel width={"15vw"}
          wrapAround={true}
          heightMode={"first"}
          transitionMode={'scroll3d'}>

          {ride.photoUrls.map((photo) => {
            return <img className="ride-photo" src={photo} key={photo}></img>;
          })}
          </Carousel>
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

export default RideIndex;
