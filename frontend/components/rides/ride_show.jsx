import React from "react";
import BookingFormContainer from '../bookings/booking_form_container';
import BikeMap from '../map/bike_map';
import { DayPickerRangeController } from 'react-dates';
class RideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: null,
      check_out: null,
    };
    debugger
  }
  componentDidMount() {
    this.props.fetchRide(this.props.match.params.rideId);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.rideId !== this.props.match.params.rideId) {
  //     this.props.fetchRide(this.props.match.params.rideId);
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.ride &&
      this.props.ride.id !== parseInt(nextProps.match.params.rideId)
    ) {
      this.props.fetchRide(nextProps.match.params.rideId);
    }
  }

  render() {
    const { ride } = this.props;
    const center = new google.maps.LatLng(ride.lat, ride.lng);
    const zoom = 15;
    debugger
    return (
      <div id="ride-show-page">
        <section className="ride-header">
          <h2>
            {ride.brand} : {ride.model}
          </h2>
          <div className="ride-minor-details">
            <span>
              Style:{ride.style} Located in: {ride.city}
            </span>
          </div>
          <section className="ride-images-container">
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
          </section>

          <h2>Description</h2>
          {ride.description}
        </section>
        <section className="avaibility-dates">
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            hideKeyboardShortcutsPanel={true}
            numberOfMonths={1}
          />
        </section>
        <div className="ride-show-map">
          {/* <BikeMap ride={[ride]} center={center} zoom={zoom} /> */}
         
        </div>
        <div>
          <BookingFormContainer />
        </div>
      </div>
    );
  }
}

export default RideShow;
