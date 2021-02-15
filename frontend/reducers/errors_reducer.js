import { combineReducers } from "redux";
import bookingErrorsReducer from "./booking_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import reviewErrorsReducer from "./review_errors_reducer";
const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  bookings: bookingErrorsReducer,
  review: reviewErrorsReducer,
});

export default errorsReducer;
