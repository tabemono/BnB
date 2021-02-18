import React from "react";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { BsSearch } from "react-icons/bs";
import RideIndexItem from "../rides/ride_index_item";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      lat: null,
      lng: null,
    };
    // this.newLocation = this.newLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const lat = this.state.lat || 40.753647;
    const lng = this.state.lng || -73.980707;

    this.props
      .rideSearch(this.state.keyword)
      .then(() => this.props.history.push(`/search=${this.state.keyword}`));
  }

  update(e) {
    e.preventDefault();
    this.setState({ keyword: e.target.value });
  }

  render() {
    // if (this.props.rides.length < 1) {
    //   return (
    //     <div>
    //       <p> Sorry no results available. Try New York or San Francisco</p>
    //     </div>
    //   );
    // }
    // } else {
    //   const { rides, searchedCity, requestRide } = this.props;

    //   const count = this.props.rides.length;
    //   const filteredRides = rides.filter((ride) => {
    // console.log(this.state.input);
    // console.log(
    //   ride.city.toLowerCase().match(this.state.input.toLowerCase())
    // );
    // return ride.city.toLowerCase().includes(this.state.input.toLowerCase());
    //   return ride.city
    //     .toLowerCase()
    //     .match(this.state.searchTerm.toLowerCase());
    // });
    // console.log(filteredRides);

    // console.log(this.props.rides);
    // const SearchedLength = searchedCity.length;
    // const SearchedItems = filteredRides.map((ride) => (
    //   <RideIndexItem
    //     key={ride.id}
    //     history={this.props.history}
    //     requestRide={requestRide}
    //     ride={ride}
    //   />
    // ));
    return (
      <div className="search-wrapper">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="search-form-input">
            <input
              type="text"
              placeholder="Rides near you"
              value={this.state.keyword}
              onChange={(e) => this.update(e)}
              id="search-input"
            />
          </div>
          {/* 
          <div className="calendars">
            <div className="date-labels">
              <div id="checkin-label">Ride Out</div>
              <div id="checkout-label">Ride Back</div>
            </div>
            <DateRangePicker
              checkIn={this.state.checkIn} // momentPropTypes.momentObj or null,
              checkInId="search_start" // PropTypes.string.isRequired,
              checkOut={this.state.checkOut} // momentPropTypes.momentObj or null,
              checkOutId="search_end" // PropTypes.string.isRequired,
              onDatesChange={({ checkIn, checkOut }) =>
                this.setState({ checkIn, checkOut })
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([check_in, check_out]) or null,
              onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              checkInPlaceholderText="Add dates"
              checkOutPlaceholderText="Add dates"
              displayFormat="MMM D"
              noBorder={false}
              hideKeyboardShortcutsPanel={true}
              withPortal
              block
              readOnly
              daySize={50}
            />
          </div> */}

          <div id="search-badge">
            <button
              className="search-button"
              onClick={(e) => this.handleSubmit(e)}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
