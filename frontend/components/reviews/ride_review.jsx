import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReview, fetchReview } from "../../actions/review_actions";
import moment from "moment";
const formatDate = (date) => {
  const dateString = moment(date).format("LL");
  const arr = dateString.split(" ");
  return arr[0] + " " + arr[2];
};

const RideReview = ({ riders, review, currentUser, rideId }) => {
  const rider = riders[review.rider_id];
  const [deleted, setDeleted] = useState(false);
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
              <i className="fas fa-user-circle fa-3x"></i>
            </div>
            <div key={rider.id} className="review-rider">
              <h3>
                <strong>{rider.firstname}</strong>
              </h3>

              <h4>{formatDate(review.updatedAt)}</h4>
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
