import React from "react";
import RideIndex from "../rides/ride_index";
import BikeMap from "../map/bike_map";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.mapRerender = this.mapRerender.bind(this);
  }

  mapRerender() {
    // const { rides } = this.props;
    // const { ride } = rides;
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

  render() {
    const {
      rides,
      fetchRides,
      //   updateBounds,
      // rideSearch,
      requestRide,
      updateFilter,
      keyword,
      deleteKeyword,
    } = this.props;

    return (
      <div>
        <div className="ride-index-page">
          <div className="ride-index">
            <ul className="ride-index-left">
              <span className="index-count"></span>
              <RideIndex
                rides={rides}
                fetchRides={fetchRides}
                keyword={keyword}
                requestRide={requestRide}
                updateFilter={updateFilter}
                deleteKeyword={deleteKeyword}
              />
            </ul>
            {/* <div id="map-container"> */}
            <BikeMap
              rides={rides}
              // updateBounds={updateBounds}
              updateFilter={updateFilter}
              keyword={keyword}
              deleteKeyword={deleteKeyword}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
