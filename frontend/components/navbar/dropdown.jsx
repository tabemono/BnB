import React from "react";
import LoginDrop from "./login_drop";
import LogoutDrop from "./logout_drop";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
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
    e.stopPropagation();
    this.setState({ menu: !this.state.menu }, () => {
      if (this.state.menu) {
        document.addEventListener("click", this.toggleMenu);
      } else {
        document.removeEventListener("click", this.toggleMenu);
      }
    });
  }

  dropdown() {
    if (!this.state.menu) {
      return null;
    } else if (this.props.currentUser) {
      return (
        <LoginDrop
          currentUser={this.props.currentUser}
          logout={this.props.logout}
        />
      );
    } else {
      return <LogoutDrop openModal={this.props.openModal} />;
    }
  }

  render() {
    return (
      <section className="right-nav">
        <div className="nav-drop-down">
          <button className="menu-button" onClick={this.toggleMenu}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-user-circle fa-2x"></i>
          </button>
          {this.dropdown()}
        </div>
      </section>
    );
  }
}

const mstp = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id],
  };
};

const mdtp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mstp, mdtp)(DropDown);
