import React from "react";
import moment from "moment";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      review: this.props.review,
      deleted: false,
    };
  }

  handleDelete(e) {
    this.props.deleteReview(this.props.review.id);
    this.setState({ deleted: true });
  }

  render() {
    const { riders, review, currentUser } = this.props;
    const formatDate = (date) => {
      const dateString = moment(date).format("LL");
      const arr = dateString.split(" ");
      return arr[0] + " " + arr[2];
    };
    const notDeleted = (
      <div key={review.id} className="review-item-container">
        <div className="review-rating">
          <div className="ride-rating-review">
            <div className="star">
              <i className="fas fa-star fa-lg"></i>
            </div>
            {review.rating}
          </div>
          <div className="review-rider">
            <h3>by {riders[review.rider_id].firstname}</h3>
            <h4>{formatDate(review.updatedAt)}</h4>
          </div>
        </div>
        <div className="review-body">{review.body}</div>

        {review.rider_id === currentUser ? (
          <div className="review-del-btn">
            <button
              className="review-delete"
              onClick={() => this.handleDelete()}
            >
              Remove Your Review
            </button>
          </div>
        ) : null}
      </div>
    );

    if (!this.state.deleted) {
      return notDeleted;
    } else {
      return <></>;
    }
  }
}

export default ReviewIndexItem;
