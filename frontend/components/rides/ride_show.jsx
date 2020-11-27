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
    const styleIcon = () => {
      if (ride.style === "Adventure/Touring") {
        return <img id="s-icon" src={window.adv} alt="style-icon"></img>;
      } else if (ride.style === "Dirt") {
        return <img id="s-icon" src={window.dirt} alt="style-icon"></img>;
      } else if (ride.style === "Street") {
        return <img id="s-icon" src={window.street} alt="style-icon"></img>;
      } else {
        return <img id="s-icon" src={window.sportb} alt="style-icon"></img>;
      }
    };
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
          <div className="ride-body">
            <div className="ride-details">
              <div className="ride-header">
                {/* <h3>Bike is owned by {ride.owner.firstname}</h3> */}
                <span>Located in: {ride.city}</span>
              </div>
              <div className="ride-minor-details">
                {ride.brand} : {ride.model}
              </div>
              <span>
                Style:{ride.style}
                {styleIcon()}
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
            <div className="booking-div">
              <div className="booking-form">
                <BookingFormContainer />
              </div>
            </div>
          </div>
          <div className="ride-show-map">
            <div className="map-bottom">
              <BikeShowMap ride={ride} center={center} zoom={zoom} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RideShow;
