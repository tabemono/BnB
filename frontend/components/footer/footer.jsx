import React from "react";

export default () => {
  return (
    <footer id="all-page-footer">
      <div className="footer-list-container">
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
            <a href="https://tabemono.github.io" target="_blank">
              Porfolio site
            </a>
          </li>
        </ul>
        <ul>
          <h3>Contact</h3>
          <li>
            <a href="mailto:chentony17@gmail.com">chentony17@gmail.com</a>
          </li>
          <li>
            <p>(845) 893-3853</p>
          </li>
          <li>
            <p>New York, NY</p>
          </li>
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
          <h3>Based on</h3>
          <li>
            <a href="https://www.airbnb.com" target="_blank">
              Airbnb
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-tag-line">
        <h3 id="copyright">© 2021 Bikes & Bikers, Inc. All rights reserved</h3>
      </div>
    </footer>
  );
};
