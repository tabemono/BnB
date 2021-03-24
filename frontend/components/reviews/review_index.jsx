import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: this.props.reviews };
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
  // componentWillMount() {

  // }

  // handleDelete(e) {
  //     e.preventDefault();
  //     this.props.deleteReview()

  // }

  // componentDidUpdate(prevProps) {
  //   // debugger;
  //   if (prevProps.reviews.length !== this.props.reviews.length) {
  //     this.props.fetchReviews(this.props.match.params.rideId);
  //   }
  // }

  render() {
    const { riders, reviews, currentUser, deleteReview } = this.props;

    // const rider = riders[review.rider_id];
    // const formatDate = (date) => {
    //   const dateString = moment(date).format("LL");
    //   const arr = dateString.split(" ");
    //   return arr[0] + " " + arr[2];
    // };
    const currentReviews = this.state.reviews;

    return (
      <div>
        {reviews.map((review) => (
          <ReviewIndexItem
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
