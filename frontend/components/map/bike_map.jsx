import React from "react";
import { withRouter } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";
const getCoordsObj = (latLng) => ({
  lat: latLng.lat(),
  lng: latLng.lng(),
});
class BikeMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.775899, lng: -73.97854 },
      zoom: 12,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarketManager = new MarkerManager(
      this.map,
      this.handleMarkClick.bind(this)
    );

    this.MarketManager.updateMarkers(this.props.rides);
  }

  componentDidUpdate() {
    // if (prevProps !== this.props) {
    this.MarketManager.updateMarkers(this.props.rides);
    // }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "click", (e) => {
      const coords = getCoordsObj(e.latLng);
    });
  }

  handleMarkClick(ride) {
    this.props.history.push(`/rides/${ride.id}`);
  }

  render() {
    return <div id="map" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default withRouter(BikeMap);
