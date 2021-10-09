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
              <a href="https://github.com/tabemono" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tony-chen-830850201/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://tabemono.github.io">Porfolio</a>
            </li>
          </ul>
          <ul>
            <h3>Contact</h3>
            <li>
              <a href="mailto:chentony17@gmail.com">chentony17@gmail.com</a>
            </li>
            <li>(929)888-3929</li>
            <li>New York, NY</li>
          </ul>
          <ul>
            <h3>Other Projects</h3>
            <li>
              <a href="https://tabemono.github.io/Just-Bounce/" target="_blank">
                Just Bounce
              </a>
            </li>
            <li>
              <a href="https://menutube.herokuapp.com" target="_blank">
                MenuTube
              </a>
            </li>
          </ul>
          <ul>
            <h3>Inspired from</h3>
            <li>
              <a href="https://www.airbnb.com" target="_blank">
                AirBnb
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 id="copyright">
            © 2021 Bikes & Bikers, Inc. All rights reserved
          </h3>
        </div>
      </footer>
    );
  }
}

export default Footer;
