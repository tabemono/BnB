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
    // let latitude = this.props.rides[0].lat;
    // let longtitude = this.props.rides[0].lng;
    // this.center = { lat: latitude, lng: longtitude };
    // this.state = {
    //   lat: latitude,
    //   lng: longtitude,
    // };
    this.placeMarker = false;
    this.cities = {
      "new york": { bounds: { lat: 40.7493039, lng: -74.0070414 }, zoom: 13 },
      "san francisco": { bounds: { lat: 37.7749, lng: -122.4194 }, zoom: 13 },
      default: { bounds: { lat: 40.228245, lng: -96.2309}, zoom: 3.9 },
   
    };
    // this.compare = this.compare.bind(this);
  }

  // mapOptions() {
  //   const options = {};
  //   if (this.props.rides.length) {
  //     options.center = {
  //       lat: this.props.rides[0].lat,
  //       lng: this.props.rides[0].lng,
  //     };
  //     options.zoom = 13;
  //   } else {
  //     options.center = { lat: 40.228245, lng: -96.2309 };
  //     options.zoom = 3.9;
  //   }
  //   return options;
  // }

  componentDidMount() {
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

    // const map = this.map;
    // // const mapOpts = getLocation(this.props.keyword);
    // this.map = new google.maps.Map(this.mapNode, this.mapOptions());
    // // this.map = new google.maps.Map(this.mapNode, mapOpts);
    // this.markerManager = new MarkerManager(
    //   this.map,
    //   this.handleMarkClick.bind(this)
    //   // position: { lat: ride.lat, lng: ride.lng },
    //   // animation: google.maps.Animation.DROP
    // );
    // if (this.props.ride) {
    //   this.props.fetchRide(this.props.rideId);
    // } else {
    //   this.boundListener();
    //   this.markerManager.updateMarkers(this.props.rides);
    // }
    // this.placeMarker = false;
    // let lat;
    // let lng;
    // const { rides } = this.props;
    // if (rides.length === 0) {
    //   lat = 40.758;
    //   lng = -73.9855;
    // } else {
    //   lat = rides[0].lat;
    //   lng = rides[0].lng;
    // }
    // const mapOptions = {
    //   center: { lat: lat, lng: lng },
    //   zoom: 12,
    // };

    // this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.markerManager = new MarkerManager(
    //   this.map,
    //   this.handleMarkClick.bind(this)
    // );

    //   this.map.addListener("idle", () => {
    //     if (!this.placeMarker) {
    //       const { north, south, east, west } = this.map.getBounds().toJSON();

    //       const bounds = {
    //         northEast: { lat: north, lng: east },
    //         southWest: { lat: south, lng: west },
    //       };

    //       this.props.updateFilter("bounds", bounds);
    //     }
    //     this.placeMarker = false;
    //   });
    // this.markerManager.updateMarkers(this.props.rides);

    // rides.map((ride) => {
    //   let marker = new google.maps.Marker({
    //     map: this.map,
    //     draggable: false,
    //     position: { lat: ride.lat, lng: ride.lng },
    //     animation: google.maps.Animation.DROP,
    //   });
    //   marker.setMap(this.map);
    // });
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
    // if (prevProps.keyword !== this.props.keyword) {
    //   this.map = new google.maps.Map(this.mapNode, this.mapOptions());
    //   this.markerManager = new MarkerManager(this.map);
    //   // this.map.setCenter(this.mapOptions.center);
    //   this.boundListener();
    // }
    // this.MarkerManager.removeAllMarkers();
    // this.markerManager.updateMarkers(this.props.rides);

    // if (prevProps.rides !== this.props.rides) {
    //   const {center, zoom} = this.mapOptions();
    //   this.map.panTo(center);
    //   this.map.setZoom(zoom);

    // }
    // debugger;
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
      // debugger;
      this.placeMarker = true;
      this.markerManager.removeAllMarkers();
      this.markerManager.updateMarkers(this.props.rides);
    }

    // let lat;
    // let lng;
    // let zoom;
    // const { rides } = this.props;
    // if (rides.length === 0 || window.location.hash === "#/rides") {
    //   lat = 40.228245;
    //   lng = -96.2309;
    //   zoom = 3.9;
    // } else {
    //   lat = rides[0].lat;
    //   lng = rides[0].lng;
    //   zoom = 13;
    //   // this.markerManager.updateMarkers(this.props.rides);
    //   // debugger;
    // }
    // const mapOptions = {
    //   center: { lat: lat, lng: lng },
    //   zoom: zoom,
    // };

    // this.map = new google.maps.Map(this.mapNode, mapOptions);
    // if (prevProps.keyword !== this.props.keyword) {
    //   this.map = new google.maps.Map(this.mapNode, this.mapOptions());
    //   this.markerManager = new MarkerManager(this.map);
    //   // this.map.setCenter(this.mapOptions.center);
    //   this.boundListener();
    // }
    // this.markerManager.updateMarkers(this.props.rides);
    // if (this.compare(rides, prevProps.rides)) {
    //   rides.map((ride) => {
    //     let marker = new google.maps.Marker({
    //       map: this.map,
    //       // draggable: false,
    //       postion: { lat: ride.lat, lng: ride.lng },
    //       animation: google.maps.Animation.DROP,
    //       icon: {
    //         url: window.marker,
    //         scaledSize: new google.maps.Size(60, 40),
    //         origin: new google.maps.Point(0, 0),
    //         labelOrigin: new google.maps.Point(27, 19),
    //         backgroundColor: "white",

    //       },
    //     });
    //     return marker.setMap(this.map);
    //   });
    // }
  }

  compare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      // debugger
      return true;
    } else {
      arr1.map((el1) => {
        // debugger
        arr2.map((el2) => {
          if (el1 !== el2) {
            // debugger
            return true;
          }
        });
      });
      return false;
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
