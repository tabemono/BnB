import React from "react";
import BookingFormContainer from "../bookings/booking_form_container";
import BikeShowMap from "../map/bike_show_map";
import { DayPickerRangeController } from "react-dates";

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
    const zoom = 15;
    return (
      <div id="ride-show-page">
        <div className="ride-header">
          <h2>
            {ride.brand} : {ride.model}
          </h2>
          <div className="ride-minor-details">
            <span>Located in: {ride.city}</span>
          </div>
          <div className="ride-images-container">
            <div className="ride-thumb-img">
              <img width="100%" className="thumb-img" src={ride.photoUrls[0]} />
            </div>

            <div className="ride-show-small">
              <div className="ride-side-photos">
                <img className="photo-top" src={ride.photoUrls[1]} />
                <img className="photo-top" src={ride.photoUrls[2]} />
              </div>

              <div className="ride-side-photos">
                <img className="photo-bot" src={ride.photoUrls[3]} />
                <img className="photo-bot" src={ride.photoUrls[4]} />
              </div>
            </div>
          </div>
          <h2>Style:{ride.style}</h2>
          <p>Description:</p>
          {ride.description}
        </div>
        <div className="ride-body">
          <div className="availability-dates">
            <DayPickerRangeController
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              }
              focusedInput={this.state.focusedInput}
              onFocusChange={(focusedInput) => this.setState({ focusedInput })}
              hideKeyboardShortcutsPanel={true}
              numberOfMonths={2}
            />
          </div>
          <div className="booking-form">
            <BookingFormContainer />
          </div>
        </div>
        <div className="ride-show-map">
          <div className="map-bottom">
            <BikeShowMap ride={ride} center={center} zoom={zoom} />
          </div>
        </div>
      </div>
    );
  }
}

export default RideShow;
