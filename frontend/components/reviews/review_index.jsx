import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: this.props.reviews };
    // this.state = this.props.reviews;
  }

  // componentDidUpdate(prevState) {
  //   if (prevState.reviews.length!== this.state.reviews.length) {
  //     debugger;
  //     this.setState({ reviews: this.props.reviews });
  //   }
  // }

  // componentDidMount() {
  //   debugger;
  //   const url = window.location.hash;
  //   const lastSegment = url.split("/").pop();

  //   this.props.fetchReviews(lastSegment);
  // }

  render() {
    const {
      riders,
      reviews,
      currentUser,
      deleteReview,
      // fetchReviews,
    } = this.props;
    // const reviews = this.state.reviews;
    // const currentReviews = this.state.reviews;

    return (
      <div>
        {reviews.map((review) => (
          <ReviewIndexItem
            key={review.id}
            review={review}
            riders={riders}
            currentUser={currentUser}
            deleteReview={deleteReview}
            // fetchReviews={fetchReviews}
          />
        ))}
      </div>
    );
  }
}

export default ReviewIndex;
