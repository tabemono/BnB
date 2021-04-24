import React, { useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import BookingIndexItem from "./booking_index_item";
import Footer from "../footer/footer";
const BookingIndex = ({
  bookings,
  fetchBookings,
  user,
  rides,
  destroyBooking,
}) => {
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    fetchBookings(match.params.userId);
  }, [fetchBookings]);

  const handleClick = () => history.push("/rides");

  const b3 = window.trips;
  if (!user) return null;
  const upcomingBookings = !bookings.length ? (
    <div className="no-bookings">
      <div className="booking-par">
        <p>
          When you’re ready to start planning your next Ride, we’re here to
          help.
        </p>
      </div>
      <div className="background-picture">
        <img className="booking-picture" src={b3} />
      </div>
    </div>
  ) : (
    <div>
      <div className="background-picture">
        <img className="booking-picture1" src={b3} />
      </div>
      <div className="bookings-item-columns">
        {bookings.reverse().map((booking) => (
          <BookingIndexItem
            booking={booking}
            user={user}
            rides={rides}
            destroyBooking={destroyBooking}
            key={booking.id}
          />
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <div className="booking-index-container">
        <h1>Rides</h1>
        <hr className="underline" />
        {upcomingBookings}
        <button className="booking-index-button" onClick={handleClick}>
          Explore BnB
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BookingIndex;
