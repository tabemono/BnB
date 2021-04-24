import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className="footer-container">
          <div>© 2021 by Tony Chen</div>
          <div>
            Inspired by{" "}
            <a target="_blank" href="https://airbnb.com">
              AirBnb{" "}
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
