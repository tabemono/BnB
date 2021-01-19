import React from "react";
import BikeMap from "../map/bike_map";

import RideIndexitem from "../rides/ride_index_item";
import { connect } from "react-redux";
import { fetchRides, requestRide } from "../../actions/ride_actions";

// import Search from "./search";
const mstp = (state, ownProps) => {
  const allRides = Object.values(state.entities.rides);
  console.log(ownProps);
  // const searchedTerm = ownProps.match.params.query.toLowerCase();
  // const searchedCity = allRides.filter((ride) => {
  //   return ride.city.toLowerCase().includes(searchTerm);
  // });

  return {
    rides: Object.values(state.entities.rides),
    city: ownProps.match.params.input
    // search: state.entities.search,
    // searchedCity: searchedCity,
  };
};

const mdp = (dispatch) => {
  return {
    fetchRides: (query) => dispatch(fetchRides(query)),
    requestRide: (rideId) => dispatch(fetchRide(rideId)),
  };
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rides: [],
    };
  }

  componentDidMount() {
    this.props.fetchRides().then((rides) => { 
     const filteredRides = Object.values(rides.rides).filter(ride => {
        return ride.city.toLowerCase() === this.props.city.toLowerCase();
      });
      // console.log(Object.values(rides.rides));
      
      // console.log(typeof this.props.city);
      // console.log(filteredRides);
      this.setState({ rides: filteredRides });
    });
  }

  render() {
    if (this.state.rides.length < 1) {
      return null;
    } else {
      const rides = this.state.rides;
      const requestRide = this.props.requestRide;
      const count = this.state.rides.length;
      // const filteredRides = rides.filter((ride) => {
      //   console.log(ride);
      //   return ride.city.toLowerCase().includes(this.state.city.toLowerCase());
      // });
      // const SearchedLength = searchedCity.length;
      const SearchedItems = rides.map((ride) => (
        <RideIndexitem
          key={ride.id}
          history={this.props.history}
          requestRide={requestRide}
          ride={ride}
        />
      ));
      return (
        <div>
          <div className="ride-index-page">
            <div className="ride-index">
              <ul className="ride-index-left">
                <span className="index-count">{count} bikes to ride.</span>
                {SearchedItems}
              </ul>
              <div id="map-container">
                <BikeMap rides={rides} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  //   const { rides, searchedCity, requestRide } = this.props;
  //   const count = this.props.rides.length;
  //   const filteredRides = rides.filter((ride) => {
  //     return ride.city.toLowerCase().includes(this.state.input.toLowerCase());
  //   });
  //   // const SearchedLength = searchedCity.length;
  //   const SearchedItems = filteredRides.map((ride) => (
  //     <RideIndexitem
  //       key={ride.id}
  //       history={this.props.history}
  //       requestRide={requestRide}
  //       ride={ride}
  //     />
  //   ));
  //   return (
  //     <div>
  //       <div className="ride-index-page">
  //         <div className="ride-index">
  //           <ul className="ride-index-left">
  //             <span className="index-count">{count} bikes to ride.</span>
  //             {SearchedItems}
  //           </ul>
  //           <div id="map-container">
  //             <BikeMap rides={rides} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default connect(mstp, mdp)(Search);
