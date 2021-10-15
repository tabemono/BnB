import { isEqual } from "date-fns";
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
    this.placeMarker = false;

    this.placeMarker = false;
  }

  componentDidMount() {
    let lat;
    let lng;
    let zoom;
    const query = window.location.hash;
    const { rides } = this.props;
    if (
      rides.length === 0 ||
      window.location.hash === "#/rides" ||
      query === "search=sport" ||
      query === "search=street" ||
      query === "search=adventure"
    ) {
      lat = 40.228245;
      lng = -96.2309;
      zoom = 3.9;
    } else {
      lat = rides[0].lat;
      lng = rides[0].lng;
      zoom = 13;
    }
    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: zoom,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.markerManager = new MarkerManager(
      this.map,
      this.handleMarkClick.bind(this)
    );

    this.map.addListener("idle", () => {
      if (!this.placeMarker) {
        const { north, south, east, west } = this.map.getBounds().toJSON();

        const bounds = {
          northEast: { lat: north, lng: east },
          southWest: { lat: south, lng: west },
        };

        this.props.updateFilter("bounds", bounds);
      }
      this.placeMarker = false;
    });
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
    // debugger;
    //checking keyword change
    if (prevProps.location.pathname !== this.props.location.pathname) {
      // debugger;
      let lat;
      let lng;
      let zoom;
      const { rides } = this.props;
      if (rides.length === 0 || window.location.hash === "#/rides") {
        lat = 40.228245;
        lng = -96.2309;
        zoom = 3.9;
      } else {
        lat = rides[0].lat;
        lng = rides[0].lng;
        zoom = 13;
        // this.markerManager.updateMarkers(this.props.rides);
        // debugger;
      }
      const mapOptions = {
        center: { lat: lat, lng: lng },
        zoom: zoom,
      };
      this.map.setCenter(mapOptions.center);
      this.map.setZoom(mapOptions.zoom);
      this.props.deleteKeyword();
      this.markerManager.removeAllMarkers();
      this.markerManager.updateMarkers(this.props.rides);
    } else {
      this.placeMarker = true;
      this.markerManager.removeAllMarkers();
      this.markerManager.updateMarkers(this.props.rides);
    }
  }

  handleMarkClick(ride) {
    this.props.history.push(`/rides/${ride.id}`);
  }

  render() {
    return <div id="map-index" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default withRouter(BikeMap);
