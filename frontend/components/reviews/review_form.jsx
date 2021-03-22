import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
    this.handleRating = this.handleRating.bind(this);
  }

  clearReview() {
    const start = Array.from(document.getElementsByClassName("start-reviews"));
    start.forEach((star) => (star.checked = false));
    const textArea = document.getElementById("review-text");
    textArea.className = "review-body-null-error";
    this.setState(this.props.review);
  }

  renderErrors() {
    if (!this.props.errors.length) return null;
    const textArea = document.getElementById("review-text");
    textArea.className = "review-body-error";
    return (
      <div className="review-errors">
        {this.props.errors.map((error, idx) => (
          <p className="errors-body" key={idx}>
            {error}
          </p>
        ))}
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      createReview,
      fetchRide,
      fetchReviews,
      clearErrors,
      openModal,
    } = this.props;
    if (this.props.review.rider_id) {
      createReview(this.state).then(clearErrors());
      fetchRide(this.state.ride_id);
      fetchReviews(this.state.ride_id);
      this.clearReview();
    } else openModal("login");
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  componentWillUnmount() {
    this.props.clearErrors();
    // delete window["reviewId"];
  }

  handleRating(rating) {
    return this.setState({ rating });
  }

  setRating(num) {
    this.setState({ rating: num });
  }

  ratingStars() {
    const { rating } = this.state;
    return [5, 4, 3, 2, 1].map((i) => (
      <>
        <input
          type="radio"
          key={`radio-${i}`}
          id={`radio-${i}`}
          value={i}
          onChange={() => this.setRating(i)}
          checked={i === rating}
          onClick={() => this.setRating(i)}
        />
        <label htmlFor={`radio-${i}`} key={`label-${i}`}>
          <i className="fas fa-star fa-2x"></i>
        </label>
      </>
    ));
  }

  render() {
    const errors = this.renderErrors();
    const { rider_id } = this.state;
    return (
      <div className="review-form-container">
        <div className="review-header">
          <h3>Leave a review</h3>
        </div>
        <div className="mid-review">
          <div className="reviews-ratings">
            <div className="rating">{this.ratingStars()}</div>
          </div>
          <textarea
            id="review-text"
            key={rider_id}
            className="review-body-null-error"
            onChange={this.update("body")}
            placeholder="Tell us about the ride"
            // value={this.state.body}
          />
        </div>
        {errors}
        <div className="review-footer">
          <button
            className="review-btn"
            type="submit"
            onClick={this.handleSubmit}
          >
            Add review
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
