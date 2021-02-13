import { createBooking } from "../../actions/booking_actions";
import { fetchRide } from "../../actions/ride_actions";
import BookingForm from "./booking_form";
import { connect } from "react-redux";
import { START_DATE } from "react-dates/src/constants";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  booking: {
    startDate: null,
    endDate: null,
    num_riders: 1,
    guest_id: state.session.id,
    spot_id: ownProps.spotId,
    focusedInput: START_DATE,
    open: false,
    error: "",
  },
});

const mDTP = (dispatch) => ({
  action: (booking) => dispatch(createBooking(booking)),
  fetchRide: (rideId) => dispatch(fetchRide(rideId)),
  openModal: () => dispatch(openModal("login")),
});

export default connect(mSTP, mDTP)(BookingForm);
