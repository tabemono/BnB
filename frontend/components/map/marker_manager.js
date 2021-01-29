class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(rides) {
    const ridesObj = {};
    rides.forEach((ride) => (ridesObj[ride.id] = ride));

    rides
      .filter((ride) => !this.markers[ride.id])
      .forEach((newRide) =>
        this.createMarkerFromRide(newRide, this.handleClick)
      );

    Object.keys(this.markers)
      .filter((rideId) => !ridesObj[rideId])
      .forEach((rideId) => this.removeMarker(this.markers[rideId]));
  }

  createMarkerFromRide(ride) {
    const position = new google.maps.LatLng(ride.lat, ride.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      animation: google.maps.Animation.DROP,
      rideId: ride.id,
      label: {
        fontFamily: "Helvetica Neue",
        fontSize: "14px",
        color: "#484848",
        fontWeight: "700",
        text: "$" + ride.price.toString(),
      },
      icon: {
        url: `${window.marker}`,
        scaledSize: new google.maps.Size(60, 40),
        origin: new google.maps.Point(0, 0),
        labelOrigin: new google.maps.Point(27, 19),
        backgroundColor: "white",
      },
    });

    marker.addListener("click", () => this.handleClick(ride));
    this.markers[marker.rideId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.rideId].setMap(null);
    delete this.markers[marker.rideId];
  }
}

export default MarkerManager;
