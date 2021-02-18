import React from "react";
import BookingFormContainer from "../bookings/booking_form_container";
import BikeShowMap from "../map/bike_show_map";
import { DayPickerRangeController } from "react-dates";
import RideShowDetail from "./ride_show_detail";
import RideReview from "../reviews/ride_review";
import ReviewContainer from "../reviews/review_container";
class RideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollFixedUp: true,
      scrollFixedB: false,
    };
  }
  componentDidMount() {
    this.props.fetchRide(this.props.match.params.rideId);

    document.addEventListener("scroll", () => {
      const belowPictures = window.scrollY < 550;
      if (belowPictures !== this.state.scrollFixedUp)
        this.setState({ scrollFixedUp: belowPictures });
    });
    document.addEventListener("scroll", () => {
      const topPictures =
        window.scrollY > document.body.scrollHeight - window.innerHeight - 345;
      if (topPictures !== this.state.scrollFixedB)
        this.setState({ scrollFixedB: topPictures });
    });
  }
  // componentDidMount() {
  //   this.props.fetchRides();
  // }

  // onFocusChange() {
  //   this.setState({
  //     focusedInputLeftCol:
  //       this.state.focusedInputLeftCol === START_DATE ? END_DATE : START_DATE,
  //   });
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.rideId !== this.props.match.params.rideId) {
      this.props.fetchRide(this.props.match.params.rideId);
    }
  }

  // componentWillUnmount() {
  //   // fix Warning: Can't perform a React state update on an unmounted component
  //   this.setState = (state, callback) => {
  //     return;
  //   };
  // }

  render() {
    if (this.props.ride) {
      const { ride } = this.props;
      // const { photoUrls } = ride;
      const reviews = ride.reviews ? Object.values(ride.reviews) : [];
      const { riders } = ride;
      let totalRate = 0;
      reviews
        .map((review) => review.rating)
        .forEach((ele) => (totalRate += ele));
      const rating = Math.round((totalRate / reviews.length) * 100) / 100;
      const scrollClass = this.state.scrollFixedUp
        ? "booking-container"
        : this.state.scrollFixedB
        ? "booking-container-absolute"
        : "fixed-booking-container";

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
            <div className="body-test">
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
                  <p>Description:</p>
                  {ride.description}
                </div>
                <div className="ride-reviews">
                  <div className="review-header">
                    <div className="ride-rating-review">
                      <div className="star">
                        <i className="fas fa-star fa-lg"></i>
                      </div>
                      {rating}
                    </div>
                    <h3 className="review-heading">
                      ({reviews.length} Reviews)
                    </h3>
                  </div>
                  <div className="reviews-container">
                    {reviews.map((review) => (
                      <RideReview
                        review={review}
                        key={review.id}
                        riders={riders}
                      />
                    ))}
                    <div className="review-form">
                      <ReviewContainer ride={ride} key={ride.id}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="booking-div-div">
                <div className="booking-div">
                  <BookingFormContainer
                    ride={ride}
                    photos={ride.photoUrls}
                    scroll={scrollClass}
                    rating={rating}
                  />
                </div>
              </div>
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

export default RideShow;
