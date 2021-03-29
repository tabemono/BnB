import React from "react";
import BookingFormContainer from "../bookings/booking_form_container";
import BikeShowMap from "../map/bike_show_map";
import { withRouter } from "react-router-dom";
import { DayPickerRangeController } from "react-dates";
import RideShowDetail from "./ride_show_detail";
import ReviewIndex from "../reviews/review_index";
import ReviewContainer from "../reviews/review_container";
import ReviewIndexContainer from "../reviews/review_index_container";
class RideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollFixedUp: true,
      scrollFixedB: false,
      // reviews: this.props.ride.reviews,
    };
  }
  componentDidMount() {
    this.props.fetchRide(this.props.match.params.rideId);
    // this.props.fetchReviews(this.props.match.params.rideId);
    // debugger;
    document.addEventListener("scroll", () => {
      const belowSegment = window.scrollY < 550;
      if (belowSegment !== this.state.scrollFixedUp)
        this.setState({ scrollFixedUp: belowSegment });
    });
    document.addEventListener("scroll", () => {
      const topSegment =
        window.scrollY > document.body.scrollHeight - window.innerHeight - 345;
      if (topSegment !== this.state.scrollFixedB)
        this.setState({ scrollFixedB: topSegment });
    });
  }

  // componentDidUpdate(prevProps) {
  //   debugger;
  //   if (prevProps.reviews !== this.state.reviews) {
  //     debugger;
  //     this.props.fetchReviews(this.props.match.params.rideId);
  //     debugger;
  //   }
  // }

  render() {
    if (this.props.ride) {
      const {
        ride,
        currentUser,
        deleteReview,
        fetchReview,
        fetchReviews,
      } = this.props;

      // const { photoUrls } = ride;
      const reviews = ride.reviews ? Object.values(ride.reviews) : [];
      const { riders } = ride;
      let totalRate = 0;
      reviews
        .map((review) => review.rating)
        .forEach((ele) => (totalRate += ele));
      const rating = Math.round((totalRate / reviews.length) * 100.0) / 100.0;
      const scrollClass = this.state.scrollFixedUp
        ? "booking-container"
        : this.state.scrollFixedB
        ? "booking-container-absolute"
        : "fixed-booking-container";
      let pluralRev = () => {
        if (reviews.length > 1) {
          return "reviews";
        } else {
          return "review";
        }
      };
      const center = new google.maps.LatLng(ride.lat, ride.lng);
      const zoom = 2;
      return (
        <div id="ride-show-page">
          <div className="ride-images-container">
            <div className="ride-thumb-img">
              <img className="thumb-img" src={ride.photoUrls[1]} />
            </div>
            <div className="ride-side-photos">
              <img src={ride.photoUrls[0]} />
              <img src={ride.photoUrls[2]} />
              <img src={ride.photoUrls[3]} />
              <img src={ride.photoUrls[4]} />
            </div>
          </div>
          <div className="ride-body-div">
            <div className="left-ride-body">
              <div className="ride-body">
                <div className="ride-details">
                  <div className="ride-header">
                    {/* <h3>Bike is owned by {ride.owner.firstname}</h3> */}
                    <span className="ride-rating">
                      <div className="rating-container">
                        <div className="star">
                          <i className="fas fa-star"></i>
                          {rating}
                        </div>
                      </div>
                      <br />
                      <div>Located in: {ride.city}</div>
                    </span>
                  </div>
                  <div className="ride-minor-details">
                    {ride.brand} : {ride.model}
                  </div>
                  <br />
                  <span>
                    <ul className="ride-show-icons">
                      <RideShowDetail ride={ride} />
                    </ul>
                  </span>
                </div>
                <div className="ride-show-desc">
                  <p id="about-head">About This Ride:</p>
                  {ride.description}
                </div>
                <div className="ride-reviews">
                  <div className="review-header">
                    {reviews.length > 0 ? (
                      <h2 className="review-heading">
                        <i className="fas fa-star fa-lg"></i>
                        {`${rating} (${reviews.length} ${pluralRev()})`}
                      </h2>
                    ) : (
                      <h3>There are no reviews yet for this ride.</h3>
                    )}
                  </div>
                  <div className="reviews-container">
                    {/* <ReviewIndex
                      // key={reviews.id}
                      ride={ride}
                      reviews={reviews}
                      riders={riders}
                      currentUser={currentUser}
                      deleteReview={deleteReview}
                      // fetchReview={fetchReview}
                      fetchReviews={fetchReviews}
                    /> */}
                    <ReviewIndexContainer
                      // key={reviews.id}
                      ride={ride}
                      // reviews={reviews}
                      riders={riders}
                      currentUser={currentUser}
                      // deleteReview={deleteReview}
                      // fetchReview={fetchReview}
                      // fetchReviews={fetchReviews}
                    />
                    <div className="review-form">
                      <ReviewContainer
                        key={Math.random()}
                        currentUser={currentUser}
                        ride={ride}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="booking-div-div"> */}
              {/* </div> */}
            </div>
            <div className="booking-div">
              <BookingFormContainer
                ride={ride}
                photos={ride.photoUrls}
                scroll={scrollClass}
                rating={rating}
              />
            </div>
          </div>

          <div className="ride-show-map">
            <h2>Pick Up Location</h2>
            <BikeShowMap ride={ride} center={center} zoom={zoom} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(RideShow);
