import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReview, fetchReview } from "../../actions/review_actions";
const RideReview = ({ riders, review, currentUser, rideId }) => {
  const rider = riders[review.rider_id];
  // const [riderId, setRider] = useState("")
  // debugger;
  const [deleted, setDeleted] = useState(false);
  // const [currentUser, setUser] = useState("");
  // debugger;
  useEffect(() => {
    dispatch(fetchReview(review.id));
  }, [fetchReview]);

  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    // const riderId = {riderId}
    dispatch(deleteReview(review.id)).then(setDeleted(true));
  };
  {
    if (!deleted) {
      return (
        <div className="review-item-container">
          <div className="review-rating">
            <div className="ride-rating-review">
              <div className="star">
                <i className="fas fa-star fa-lg"></i>
              </div>
              {review.rating}
            </div>
            <div key={rider.id} className="review-rider">
              by {rider.firstname}
            </div>
          </div>

          <div className="review-body">
            {review.body}
            {rider.id === currentUser ? (
              <div className="review-del-btn">
                <button className="review-delete" onClick={handleDelete}>
                  Remove Your Review
                </button>
              </div>
            ) : null}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
};

export default RideReview;
