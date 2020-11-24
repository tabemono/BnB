import React from "react";
import { withRouter } from "react-router-dom";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.query };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = this.state;
    query["startDate"] = null;
    query["endDate"] = null;
    this.props.runSearch(query);
    this.props.fetchRides(query);
    if (this.props.location.pathname !== "/rides") {
      this.props.history.push(`/rides/?search=${this.state.search}`);
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className="search-wrapper">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="search-icon-box"></div>
          <input
            className="search-form-input"
            type="text"
            placeholder="Nearby Rides"
            value={this.state.search}
            onChange={this.update("search")}
          />
          <div className="calendars">
            <label id="checkin-label">Check in</label>
            <label id="checkout-label">Check out</label>
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="search_start" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="search_end" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              startDatePlaceholderText="Add dates"
              endDatePlaceholderText="Add dates"
              displayFormat="MMM D"
              noBorder={false}
              hideKeyboardShortcutsPanel={true}
              withPortal
              block
              readOnly
              daySize={50}
            />
          </div>
          <button className="search-button">
            <div id="search-badge">
              <i className="fas fa-search"></i>
            </div>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
