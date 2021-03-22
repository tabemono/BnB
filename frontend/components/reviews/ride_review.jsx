import React from "react";

class RideReview extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   $(document).ready(function () {
  //     $(".review-delete").mouseenter(function () {
  //       $(".review-body").css(
  //         "box-shadow",
  //         "inset 0 0 0 4000px rgba(27,61,88,.8)"
  //       );
  //     });
  //     $(".review-delete").mouseout(function () {
  //       $(".review-body").css(
  //         "box-shadow",
  //         "inset 0 0 0 4000px rgb(255,255,255)"
  //       );
  //     });
  //   });
  // }

  render() {
    const { riders, review, currentUser } = this.props;
    const rider = riders[review.rider_id];
    debugger;
    const deleteButton = () => {
      if (review.rider_id === currentUser)
        return (
          <div className="review-del-btn">
            <button
              className="review-delete"
              onClick={(reviewId) => this.props.deleteReview(review.id)}
            >
              Remove Your Review
            </button>
          </div>
        );
    };
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
        <div className="review-body">{review.body}</div>
        {deleteButton()}
      </div>
    );
  }
}

export default RideReview;
