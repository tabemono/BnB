import React from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "./marker_manager";
import { isEqual } from "lodash";
import getLocation from "../../util/map_util";

const getCoordsObj = (latLng) => ({
  lat: latLng.lat(),
  lng: latLng.lng(),
});

class BikeMap extends React.Component {
  constructor(props) {
    super(props);
    // this.searchParams = new URLSearchParams(`${this.props.keyword}`);
    // let latitude = parseFloat(this.searchParams.get("lat")) || 40.753647;
    // let longtitude = parseFloat(this.searchParams.get("lng")) || -73.980707;
    // this.center = { lat: latitude, lng: longtitude };
    // this.state = {
    //   lat: latitude,
    //   lng: longtitude,
    // };
  }

  mapOptions() {
    const options = {};
    if (this.props.rides.length) {
      options.center = {
        lat: this.props.rides[0].lat,
        lng: this.props.rides[0].lng,
      };
      options.zoom = 13;
    } else {
      options.center = { lat: 40.227745, lng: -97.2509 };
      options.zoom = 3.9;
    }
    return options;
  }

  componentDidMount() {
    // const mapOpts = getLocation(this.props.keyword);
    this.map = new google.maps.Map(this.mapNode, this.mapOptions());
    // this.map = new google.maps.Map(this.mapNode, mapOpts);
    this.MarketManager = new MarkerManager(
      this.map,
      this.handleMarkClick.bind(this)
      // position: { lat: ride.lat, lng: ride.lng },
      // animation: google.maps.Animation.DROP
    );
    if (this.props.ride) {
      this.props.fetchRide(this.props.rideId);
    } else {
      this.boundListener();
      this.MarketManager.updateMarkers(this.props.rides);
    }
  }

  boundListener() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      // this.props.updateBounds(bounds);
      this.props.updateFilter("bounds", bounds);
    });
  }

  componentDidUpdate(prevProps) {
    // if (this.props.history.location.hash !== prevProps.location.hash) {
    //   const newLocation = new URLSearchParams(
    //     `${this.props.history.location.hash}`
    //   );
    //   const lat = parseFloat(newLocation.get("lat")) || 40.753647;
    //   const lng = parseFloat(newLocation.get("lng")) || -73.980707;
    //   this.setState({ lat: lat, lng: lng });
    //   this.center = { lat: lat, lng: lng };
    //   this.map.setCenter(this.center);
    // }
    if (prevProps.keyword !== this.props.keyword) {
      this.map = new google.maps.Map(this.mapNode, this.mapOptions());
      this.MarketManager = new MarkerManager(this.map);
      this.boundListener();
    }

    this.MarketManager.updateMarkers(this.props.rides);
  }

  // registerListeners() {
  //   google.maps.event.addListener(this.map, "click", (e) => {
  //     const coords = getCoordsObj(e.latLng);
  //   });
  // }

  handleMarkClick(ride) {
    this.props.history.push(`/rides/${ride.id}`);
  }

  render() {
    return <div id="map-index" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default withRouter(BikeMap);
