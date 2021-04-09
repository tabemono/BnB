import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: this.props.reviews };
  }

  render() {
    const { riders, reviews, currentUser, deleteReview } = this.props;

    return (
      <div>
        {reviews.map((review) => (
          <ReviewIndexItem
            key={review.id}
            review={review}
            riders={riders}
            currentUser={currentUser}
            deleteReview={deleteReview}
          />
        ))}
      </div>
    );
  }
}

export default ReviewIndex;
