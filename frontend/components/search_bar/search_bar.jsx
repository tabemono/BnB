import React from "react";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      lat: null,
      lng: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.setState(this.props.keyword);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .rideSearch(this.state.keyword)
      .then(() => this.props.history.push(`/search=${this.state.keyword}`));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.setState(this.props.keyword);
    }
  }
  update(e) {
    e.preventDefault();
    this.setState({ keyword: e.currentTarget.value });
  }

  render() {
    return (
      <div className="search-wrapper">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="search-form-input">
            <input
              type="text"
              placeholder="Rides near you"
              value={this.state.keyword}
              onChange={(e) => this.update(e)}
              id="search-input"
            />
          </div>

          <div id="search-badge">
            <button
              className="search-button"
              onClick={(e) => this.handleSubmit(e)}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
