import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BookingForm from "./booking_form";
import {
  createBooking,
  clearBookingErrors,
  clearBooking,
} from "../../actions/booking_actions";
import { fetchRide } from "../../actions/ride_actions";

const msp = (state, ownProps) => {
  return {
    errors: state.errors.bookings,
    bookings: Object.values(state.entities.bookings),
    ride: state.entities.rides[ownProps.match.params.rideId] || {},
  };
};

const mdp = (dispatch) => ({
  createBooking: (booking) => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors()),
  fetchRide: (id) => dispatch(fetchRide(id)),
  clearBooking: () => dispatch(clearBooking()),
});

export default withRouter(connect(msp, mdp)(BookingForm));
