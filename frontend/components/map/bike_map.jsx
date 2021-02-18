import React from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "./marker_manager";
// import { isEqual } from "lodash";
// import getLocation from "../../util/map_util";

const getCoordsObj = (latLng) => ({
  lat: latLng.lat(),
  lng: latLng.lng(),
});

class BikeMap extends React.Component {
  constructor(props) {
    super(props);

    // let latitude = this.props.rides[0].lat;
    // let longtitude = this.props.rides[0].lng;
    // this.center = { lat: latitude, lng: longtitude };
    // this.state = {
    //   lat: latitude,
    //   lng: longtitude,
    // };
    // this.placeMarker = false;
    this.cities = {
      "new york": { bounds: { lat: 40.7493039, lng: -74.0070414 }, zoom: 13 },
      "san francisco": { bounds: { lat: 37.7749, lng: -122.4194 }, zoom: 13 },
      default: { bounds: { lat: 40.736251, lng: -73.990223 }, zoom: 13 },
    };
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
    // this.placeMarker = false;
  }

  boundListener() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };

      this.props.updateFilter("bounds", bounds);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.map = new google.maps.Map(this.mapNode, this.mapOptions());
      this.MarketManager = new MarkerManager(this.map);
      // this.map.setCenter(this.mapOptions.center);
      this.boundListener();
    }
    // this.MarkerManager.removeAllMarkers();
    this.MarketManager.updateMarkers(this.props.rides);
  }

  // componentDidUpdate() {
  //   if (this.props.keyword) {
  //     const centerCity = !this.cities[this.props.keyword]
  //       ? this.cities.default
  //       : this.cities[this.props.keyword];
  //     this.map.setcenter(centerCity.bounds);
  //     this.map.setZoom(centerCity.zoom);
  //     this.props.deleteKeyword();
  //     this.MarkerManager.removeAllMarkers();
  //     this.MarkerManager.updateMarkers(this.props.rides);
  //   } else {
  //     this.placeMarker = true;
  //     this.MarkerManager.removeAllMarkers();
  //     this.MarkerManager.updateMarkers(this.props.rides);
  //   }
  // }

  handleMarkClick(ride) {
    this.props.history.push(`/rides/${ride.id}`);
  }

  render() {
    return <div id="map-index" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default withRouter(BikeMap);
