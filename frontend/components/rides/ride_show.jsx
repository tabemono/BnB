import React from "react";
import BookingFormContainer from "../bookings/booking_form_container";
import BikeShowMap from "../map/bike_show_map";
import { DayPickerRangeController } from "react-dates";
import RideShowDetail from "./ride_show_detail";
class RideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: null,
      check_out: null,
    };
  }
  componentDidMount() {
    this.props.fetchRide(this.props.match.params.rideId);
  }
  // componentDidMount() {
  //   this.props.fetchRides();
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.rideId !== this.props.match.params.rideId) {
      this.props.fetchRide(this.props.match.params.rideId);
    }
  }

  render() {
    const { ride } = this.props;
    if (!ride) return null;
    const center = new google.maps.LatLng(ride.lat, ride.lng);
    const zoom = 2;
    return (
      <div id="ride-show-page">
        <div className="ride-images-container">
          <div className="ride-thumb-img">
            <img className="thumb-img" src={ride.photoUrls[1]} />
          </div>
          <div className="ride-side-photos">
            <img src={ride.photoUrls[0]} />
            <img src={ride.photoUrls[2]} />
            <img src={ride.photoUrls[3]} />
            <img src={ride.photoUrls[4]} />
          </div>
        </div>
        <div className="ride-body-div">
          <div className="body-test">
            <div className="ride-body">
              <div className="ride-details">
                <div className="ride-header">
                  {/* <h3>Bike is owned by {ride.owner.firstname}</h3> */}
                  <span>Located in: {ride.city}</span>
                </div>
                <div className="ride-minor-details">
                  {ride.brand} : {ride.model}
                </div>
                <br />
                <span>
                  <ul className="ride-show-icons">
                    <RideShowDetail ride={ride} />
                  </ul>
                </span>
              </div>
              <div className="ride-show-desc">
                <p>Description:</p>
                {ride.description}
              </div>

              <div className="availability-dates">
                <h4>Select check-in date</h4>
                <DayPickerRangeController
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  }
                  focusedInput={this.state.focusedInput}
                  onFocusChange={(focusedInput) =>
                    this.setState({ focusedInput })
                  }
                  hideKeyboardShortcutsPanel={true}
                  numberOfMonths={2}
                />
              </div>
            </div>
            <div className="booking-div-div">
              <div className="booking-div">
                <BookingFormContainer />
              </div>
            </div>
          </div>
        </div>

        <div className="ride-show-map">
          <h2>Pick Up Location</h2>
          <BikeShowMap ride={ride} center={center} zoom={zoom} />
        </div>
      </div>
    );
  }
}

export default RideShow;
