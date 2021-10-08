import React from "react";
import LoginDrop from "./login_drop";
import LogoutDrop from "./logout_drop";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.toggleMenu);
  }

  toggleMenu(e) {
    e.preventDefault();
    e.stopPropgagation();
    this.setState({ menu: !this.state.menu }, () => {
      if (this.state.menu) {
        document.addEventListener("click", this.toggleMenu);
      } else {
        document.removeEventListener("click", this.toggleMenu);
      }
    });
  }
}
