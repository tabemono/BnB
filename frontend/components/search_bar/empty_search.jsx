import React from "react";
import { withRouter } from "react-router-dom";

class EmptySearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="ride-index-page">
          <div className="ride-index">
            <ul className="ride-index-left">
              <div>
                <h2>Please Try Another Search Like New York</h2>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EmptySearch);
