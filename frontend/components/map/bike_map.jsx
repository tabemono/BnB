import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
})
class BikeMap extends React.Component {

    componentDidMount() {
        debugger;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        const mapOptions = {
         center: { lat: 40.775899, lng: -73.97854 },
        zoom: 13
    };
    this.MarketManager = new MarkerManager(
        this.map,
        this.handleMarkClick.bind(this)
        
    );
    debugger;
    this.MarketManager.updateMarkers(this.props.rides);
    }
    
    componentDidUpdate() {
      this.MarketManager.updateMarkers(this.props.rides);
    }

    registerListeners () {
        google.maps.event.addListener(this.map, 'click', e => {
            const coords = getCoordsObj(e.latLng);
        })
    }

    handleMarkClick (ride) {
        this.props.history(`/rides/${ride.id}`)
    }

    render() {
        return (
   
      <div ref={ map => this.mapNode = map }> 
     
        </div>
        )
    }


}

export default withRouter(BikeMap);