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
      rideId: ride.id,
      label: "$" + String(ride.price),
      icon,
    });
    const icon = {
      fillColor: "white",
      fillOpacity: 6,
      scale: 1,
      strokeColor: "darkgrey",
      labelOrigin: new google.maps.Point(0, -18),
      strokeWeight: 1.6,
    };

    marker.addListener("click", () => this.handleClick(ride));
    this.markers[marker.rideId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.rideId].setMap(null);
    delete this.markers[marker.rideId];
  }
}

export default MarkerManager;
