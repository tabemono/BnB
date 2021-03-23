import React from "react";
import moment from "moment";

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

  render() {
    const { riders, reviews, currentUser } = this.props;
    debugger;
    // const rider = riders[review.rider_id];
    const formatDate = (date) => {
      const dateString = moment(date).format("LL");
      const arr = dateString.split(" ");
      return arr[0] + " " + arr[2];
    };
    const currentReviews = this.state.reviews;
    // const deleteButton = () => {
    //   if (review.rider_id === currentUser)
    //     return (
    //       <div className="review-del-btn">
    //         <button
    //           className="review-delete"
    //           onClick={(reviewId) => this.props.deleteReview(review.id)}
    //         >
    //           Remove Your Review
    //         </button>
    //       </div>
    //     );
    // };
    return (
      // <div className="review-item-container">
      //   <div className="review-rating">
      //     <div className="ride-rating-review">
      //       <div className="star">
      //         <i className="fas fa-star fa-lg"></i>
      //       </div>
      //       {review.rating}
      //     </div>
      //     <div key={rider.id} className="review-rider">
      //       <h3>by {rider.firstname}</h3>
      //       <h4>{formatDate(review.updatedAt)}</h4>
      //     </div>
      //   </div>
      //   <div className="review-body">{review.body}</div>
      //   {deleteButton()}
      // </div>

      <div>
        {reviews.map((review) => (
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
            {/* {deleteButton()} */}

            {review.rider_id === currentUser ? (
              <div className="review-del-btn">
                <button
                  className="review-delete"
                  onClick={(reviewId) =>
                    this.props.deleteReview(review.id).then(
                      this.setState({
                        reviews: currentReviews.filter(
                          (review) => review.id !== reviewId
                        ),
                      })
                    )
                  }
                >
                  Remove Your Review
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewIndex;
