import React from "react";

class Rides extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.rides;
  }

  componentDidMount() {
    this.props.fetchRides();
  }

  render() {
    return (
      <div>
        <h1> THIS PAGE IS UNDER CONSTRUCTION</h1>
      </div>
    );
  }
}

export default Rides;
