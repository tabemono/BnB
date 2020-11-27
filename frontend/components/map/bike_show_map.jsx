import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

class BikeShowMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.ride.lat, lng: this.props.ride.lng },
      zoom: 15,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.createMarker(this.props.ride);
  }

  createMarker(ride) {
    const position = new google.maps.LatLng(ride.lat, ride.lng);

    let marker = new google.maps.Marker({
      position,
      map: this.map,
      rideId: ride.id,
      icon: "&#xe860",
    });

    let circle2 = new google.maps.Circle({
      map: this.map,
      radius: 500,
      fillColor: "#999999",
      strokeColor: "#999999",
    });

    circle2.bindTo("center", marker, "position");
  }

  render() {
    return (
      <div id="map-show" ref={(map) => (this.mapNode = map)}>
        Map
      </div>
    );
  }
}

export default withRouter(BikeShowMap);
