import React from "react";
import LoggedIn from "./logged_in";
import LoggedOut from "./logged_out";
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

  dropDown() {
    if (!this.state.menu) {
      return null;
    } else if (this.props.currentUser) {
      return (
        <LoggedIn
          currentUser={this.props.currentUser}
          logout={this.props.logout}
        />
      );
    } else {
      return <LoggedOut openModal={this.props.openModal} />;
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
          {this.dropDown()}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modalType) => dispatch(openModal(modalType)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
