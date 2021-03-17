import React from "react";
import { withRouter } from "react-router-dom";

class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Error</div>;
  }
}

export default withRouter(Error)
