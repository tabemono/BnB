import React from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "./marker_manager";
// const getCoordsObj = (latLng) => ({
//   lat: latLng.lat(),
//   lng: latLng.lng(),
// });



class BikeMap extends React.Component {
  constructor(props) {
    super(props);
    this.searchParams = new URLSearchParams(`${this.props.keyword}`);
    let lat = parseFloat(this.searchParams.get("lat")) || 40.753647;
    let lng = parseFloat(this.searchParams.get("lng")) || -73.980707;
    this.center = { lat: lat, lng: lng };
    this.state = {
      lat: lat,
      lng: lng,
    };
  }

  componentDidMount() {
    const mapOptions = {
      center: this.center,
      zoom: 13,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarketManager = new MarkerManager(
      this.map,
      // this.handleMarkClick.bind(this)
      // position: { lat: ride.lat, lng: ride.lng },
      // animation: google.maps.Animation.DROP
    );
    this.boundListener();
    this.MarketManager.updateMarkers(this.props.rides);
  }

  componentDidUpdate(prevProps) {
    if (this.props.history.location.hash !== prevProps.location.hash) {
      const newLocation = new URLSearchParams(
        `${this.props.history.location.hash}`
      );
      const lat = parseFloat(newLocation.get("lat")) || 40.753647;
      const lng = parseFloat(newLocation.get("lng")) || -73.980707;
      this.setState({ lat: lat, lng: lng });
      this.center = { lat: lat, lng: lng };
      this.map.setCenter(this.center);
    }
    this.MarketManager.updateMarkers(this.props.rides);
  }

  // registerListeners() {
  //   google.maps.event.addListener(this.map, "click", (e) => {
  //     const coords = getCoordsObj(e.latLng);
  //   });
  // }

  boundListener() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      this.props.updateBounds(bounds);
    });
  }

  handleMarkClick(ride) {
    this.props.history.push(`/rides/${ride.id}`);
  }

  render() {
    return <div id="map-index" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default withRouter(BikeMap);
