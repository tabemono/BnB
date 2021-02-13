import { connect } from "react-redux";
import { fetchBookings, destroyBooking } from "../../actions/booking_actions";
import { fetchRides } from "../../actions/ride_actions";
import BookingIndex from "./booking_index";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  user: state.entities.users[state.session.id],
  rides: state.entities.rides,
  bookings: Object.values(state.entities.bookings),
});

const mDTP = (dispatch) => ({
  fetchBookings: (userId) => dispatch(fetchBookings(userId)),
  destroyBooking: (bookingId) => dispatch(destroyBooking(bookingId)),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal("review")),
  fetchrides: () => dispatch(fetchRides()),
});

export default connect(mSTP, mDTP)(BookingIndex);
