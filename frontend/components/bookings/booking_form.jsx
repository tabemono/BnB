import React from "react";
import { Link, withRouter } from "react-router-dom";
import { DateRangePicker } from "react-dates";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: null,
      check_out: null,
      rider: 1,
      focusedInput: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearBooking();
  }

    renderErrors() {
      return (
        <ul>
          {this.props.errors.map((error, idx) => {
            return (
              <li className="booking-error" key={idx}>
                {error}
              </li>
            );
          })}
        </ul>
      );
    }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const booking = {
      check_in: this.state.check_in,
      check_out: this.state.check_out,
      rider: this.state.rider,
      ride_id: parseInt(this.props.match.params.rideId),
    };
    this.props.createBooking(booking).then(() => {
      this.setState({
        check_in: null,
        check_out: null,
        focusedInput: null,
      });
      this.props.clearBookingErrors();
    });
  }

    renderBooking() {
      const bookings = this.props.bookings;
      if (!bookings.length) {
        return;
      } else if (bookings.length !== 0) {
        return (
          <ul>
            <li>Congratulations, You successfully </li>
            <li> booked {this.props.ride.title} </li>
          </ul>
        );
      }
    }

  render() {
  
    return (
      <div className="booking-form">
        <div className="booking-form-container">
          <div className="booking-errors">{this.renderErrors()}</div>
          <div className="booking-success">{this.renderBooking()}</div>
          <div className="price-tag">
            <strong className="booking-price"> ${this.props.ride.price}</strong>
            per day
          </div>
          <div className="booking-date">
            <label className="label-date">Dates</label>
            <div className="booking-date-calendar">
              <DateRangePicker
                startDate={this.state.check_in}
                startDateId="check_in"
                endDate={this.state.check_out}
                endDateId="check_out"
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ check_in: startDate, check_out: endDate })
                }
                focusedInput={this.state.focusedInput}
                onFocusChange={(focusedInput) =>
                  this.setState({ focusedInput })
                }
                startDatePlaceholderText="Check In"
                endDatePlaceholderText="Check Out"
                showClearDates={true}
                hideKeyboardShortcutsPanel={true}
              />
              <br></br>
            </div>
          </div>
          <div className="booking-riders">
            <select
              className="booking-riders-selector"
              onChange={this.update("riders")}
            ></select>
          </div>
          <button
            className="booking-button-box"
            onClick={this.handleSubmit}
            type="submit"
          >
            Book
          </button>
          <div className="booking-text"></div>
          <div className="booking-footer">
            <div className="booking-footer-text">
              <span className="booking-footer-text-header">
                {" "}
                This bike is popular!
              </span>
              <br></br>
              <span className="booking-footer-text-content">
                It’s been viewed 100+ times in the past week
              </span>
            </div>
            <div className="bulb-img"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingForm);
