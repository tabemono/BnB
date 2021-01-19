import React from "react";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { BsSearch } from "react-icons/bs";
import RideIndexItem from "../rides/ride_index_item";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { ...this.props.query };
    this.state = {
      input: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchRides();
  }

  handleSubmit(e) {
    e.preventDefault();

    // const query = this.state;
    // query["startDate"] = null;
    // query["endDate"] = null;
    // // this.props.runSearch(query);
    // this.props.fetchRides(query);
    // if (this.props.location.pathname !== "/rides") {
    //   this.props.history.push(`/search`);
    // }
    let change = this.state.input;
    // this.setState({ input: "" });
    console.log(this.state.input);
    this.props.history.push(`/search/${change}`);
  }

  update(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    if (this.props.rides.length < 1) {
      return null;
    } else {
      const { rides, searchedCity, requestRide } = this.props;

      const count = this.props.rides.length;
      const filteredRides = rides.filter((ride) => {
        // console.log(this.state.input);
        // console.log(
        //   ride.city.toLowerCase().match(this.state.input.toLowerCase())
        // );
        // return ride.city.toLowerCase().includes(this.state.input.toLowerCase());
        return ride.city.toLowerCase().match(this.state.input.toLowerCase());
      });
      // console.log(filteredRides);

      // console.log(this.props.rides);
      // const SearchedLength = searchedCity.length;
      const SearchedItems = filteredRides.map((ride) => (
        <RideIndexItem
          key={ride.id}
          history={this.props.history}
          requestRide={requestRide}
          ride={ride}
        />
      ));
      return (
        <div className="search-wrapper">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <div className="search-form-input">
              <input
                type="text"
                placeholder="Nearby Rides"
                value={this.state.input}
                onChange={(e) => this.update(e)}
              />
            </div>

            <div className="calendars">
              <div className="date-labels">
                <div id="checkin-label">Ride Out</div>
                <div id="checkout-label">Ride Back</div>
              </div>
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="search_start" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="search_end" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={(focusedInput) =>
                  this.setState({ focusedInput })
                } // PropTypes.func.isRequired,
                startDatePlaceholderText="Add dates"
                endDatePlaceholderText="Add dates"
                displayFormat="MMM D"
                noBorder={false}
                hideKeyboardShortcutsPanel={true}
                withPortal
                block
                readOnly
                daySize={50}
              />
            </div>

            <div id="search-badge">
              <button
                className="search-button"
                onClick={(e) => this.handleSubmit(e)}
              >
                <i className="fas fa-search">
                  <BsSearch />
                </i>
              </button>
            </div>
          </form>
        </div>
      );
    }
  }

  //   const { rides, searchedCity, requestRide } = this.props;

  //   const count = this.props.rides.length;
  //   const filteredRides = rides.filter((ride) => {
  //     return ride.city.toLowerCase().includes(this.state.input.toLowerCase());
  //   });
  //   console.log(filteredRides);
  //   console.log(this.props.rides)
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
  //     <div className="search-wrapper">
  //       <form className="search-form" onSubmit={this.handleSubmit}>
  //         <div className="search-form-input">
  //           <input
  //             type="text"
  //             placeholder="Nearby Rides"
  //             value={this.state.input}
  //             onChange={(e) => this.update(e)}
  //           />
  //         </div>

  //         <div className="calendars">
  //           <div className="date-labels">
  //             <div id="checkin-label">Ride Out</div>
  //             <div id="checkout-label">Ride Back</div>
  //           </div>
  //           <DateRangePicker
  //             startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  //             startDateId="search_start" // PropTypes.string.isRequired,
  //             endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  //             endDateId="search_end" // PropTypes.string.isRequired,
  //             onDatesChange={({ startDate, endDate }) =>
  //               this.setState({ startDate, endDate })
  //             } // PropTypes.func.isRequired,
  //             focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  //             onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
  //             startDatePlaceholderText="Add dates"
  //             endDatePlaceholderText="Add dates"
  //             displayFormat="MMM D"
  //             noBorder={false}
  //             hideKeyboardShortcutsPanel={true}
  //             withPortal
  //             block
  //             readOnly
  //             daySize={50}
  //           />
  //         </div>

  //         <div id="search-badge">
  //           <button
  //             className="search-button"
  //             onClick={(e) => this.handleSubmit(e)}
  //           >
  //             <i className="fas fa-search">
  //               <BsSearch />
  //             </i>
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
}

export default withRouter(SearchBar);
