import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .fetchRides({ brand: this.state.search })
      .then(() =>
        this.props.history.push(`/rides/?search=${this.state.search}`)
      );
  }
  
  update(field) {
      return e => {
          this.setState({ [field]: e.target.value });
      }
  }

  render() {
      return (
          <div>
              <form className="search-form" onSubmit={this.handleSubmit}>
              <div className="search-icon-box">
                  <div className="search-icon"><i className="fas fa-search fa-lg"></i></div>
                </div>  
              <input className="search-form-input" type="text" placeholder="Anywhere in NYC" value={this.state.search} onChange={this.update('search')}/>
              <input className="search-button" type="submit" value='Search'/>
              </form>
          </div>
      )
  }

}


export default withRouter(SearchBar);