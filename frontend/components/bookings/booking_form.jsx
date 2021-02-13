import React from "react";
import "react-dates/initialize";
import { withRouter } from "react-router";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addrider = this.addrider.bind(this);
    this.substractrider = this.substractrider.bind(this);
    this.state.condition = false;
  }

  handleDate(date) {
    if (date) {
      const dateStr = date.toISOString().slice(0, 10);
      const dateArr = dateStr.split("-");
      dateArr.push(dateArr.shift());
      return dateArr.join("/");
    }
    return "";
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.booking.rider_id) {
      const { startDate, endDate, num_riders, rider_id } = this.state;
      this.props
        .action({
          ride_id: this.props.ride.id,
          rider_id: rider_id,
          num_riders: num_riders,
          start_date: startDate._d,
          end_date: endDate._d,
        })
        .then(() =>
          this.props.history.push(`/${this.state.rider_id}/bookings`)
        );
    } else {
      this.props.openModal("login");
    }
  }

  addrider(e) {
    e.preventDefault();
    if (this.state.num_riders < 2)
      this.setState({ num_riders: this.state.num_riders + 1 });
  }

  substractrider(e) {
    e.preventDefault();
    if (this.state.num_riders > 1)
      this.setState({ num_riders: this.state.num_riders - 1 });
  }

  renderDayPicker() {
    return this.state.condition ? (
      <div className="booking-daypicker">
        <DayPickerRangeController
          startDate={this.state.startDate}
          startDateId="start"
          endDateId="end"
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel={true}
        />
      </div>
    ) : null;
  }

  renderTotalrider() {
    const riderCount =
      this.state.num_riders > 1
        ? ((this.state.num_riders - 1) / 2.0) * this.props.ride.price
        : 0;
    const riderTotal =
      (this.handleDate(this.state.endDate).split("/")[1] -
        this.handleDate(this.state.startDate).split("/")[1]) *
      this.props.ride.price;
    return riderCount + riderTotal;
  }

  render() {
    const riders = this.state.num_riders > 1 ? "riders" : "rider";
    const { scroll } = this.props;
    const bookingShadow = document.getElementById("shadow");
    if (!this.props.ride) return null;
    return (
      <div className={scroll} id="shadow">
        <div className="booking-header">
          <div className="ride-price-booking">
            <span>{this.props.ride.price}</span>/day
          </div>
          <div className="rating-container-booking">
            <div className="star">
              <i className="fas fa-star"></i>
            </div>
            {/* {this.props.rating} */}
          </div>
        </div>
        <div className="booking-calendar">{this.renderDayPicker()}</div>
        <div className="check-rider-out">
          <div className="checkin-checkout">
            <div className="booking-ride-start">
              <label className="date-label">Start Date</label>
              <input
                className="date-input"
                type="text"
                value={this.handleDate(this.state.startDate)}
                placeholder="MM/DD/YYYY"
                required
                onClick={() => {
                  bookingShadow.setAttribute("style", "height: 685px");
                  this.setState({ condition: true });
                }}
              />
            </div>
            <div className="booking-ride-end">
              <label className="date-label">End Date</label>
              <input
                className="date-input"
                type="text"
                value={this.handleDate(this.state.endDate)}
                placeholder="MM/DD/YYYY"
                required
                onClick={() => {
                  bookingShadow.removeAttribute("style", "height: 685px");
                  this.setState({ condition: false });
                }}
              />
            </div>
          </div>
          <div className="container-booking-checkout">
            <div className="rider-container">
              <label>Riders</label>
              <div className="adding-riders-booking">
                <span
                  className="substract-riders-booking"
                  onClick={this.substractrider}
                >
                  -
                </span>
                <div className="num-riders-123">
                  <div className="booking-num-riders">
                    {this.state.num_riders} {riders}{" "}
                  </div>
                </div>
                <span className="add-riders-booking" onClick={this.addrider}>
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-gem">
          <div className="booking-extra-container">
            <p className="des">
              <span>This is a rare find. </span> Usually this ride is booked
            </p>
            <div className="gem">
              <i className="far fa-gem"></i>
            </div>
          </div>
        </div>
        <div className="total-price-booking">
          <span>Total</span>
          <div className="booking-total">
            ${this.renderTotalrider() ? this.renderTotalrider() : 0}
          </div>
        </div>
        <button className="reserve-booking" onClick={this.handleSubmit}>
          Reserve
        </button>
        <div className="booking-add">
          <p>You won't be charged</p>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingForm);
