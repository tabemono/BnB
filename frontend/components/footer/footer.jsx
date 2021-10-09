import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer id="main-footer">
        <div className="footer-listings">
          <ul>
            <h3>About me</h3>
            <li>
              <a
                // className="git"
                href="https://github.com/tabemono"
                target="_blank"
              >
                {/* <img src={window.github}></img> */}
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="footer-container">
          <div>© 2021 by Tony Chen</div>
          <div>
            Inspired by{" "}
            <a target="_blank" href="https://airbnb.com">
              AirBnb{" "}
            </a>
          </div>
        </div> */}
      </footer>
    );
  }
}

export default Footer;
