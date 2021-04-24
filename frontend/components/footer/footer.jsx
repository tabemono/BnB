import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className="footer-container">
          <div>© by Tony Chen</div>
          <div>
            Inspired by{" "}
            <a target="_blank" href="https://airbnb.com">
              AirBnb{" "}
            </a>
            and interests in motorcycles in mind.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
