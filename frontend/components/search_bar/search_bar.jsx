import React from "react";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { BsSearch } from "react-icons/bs";
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
          <div className="search-form-input">
            <input
              type="text"
              placeholder="Nearby Rides"
              value={this.state.query}
              onChange={this.update("search")}
            />
          </div>

          <div className="calendars">
            <div className="date-labels">
              <div id="checkin-label">Ride Out</div>
              <div id="checkout-label">Ride Back</div>
            </div>
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

          <div id="search-badge">
            <button className="search-button">
              <i className="fas fa-search">
                <BsSearch />
              </i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
