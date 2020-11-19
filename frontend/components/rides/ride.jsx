import React from "react";

class Rides extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.rides;
  }

  componentDidMount() {
    this.props.fetchRide(this.props.match.params.rideId);
  }
    
  render() {
    debugger
    return <div>hello</div>;
  }
}

export default Rides;