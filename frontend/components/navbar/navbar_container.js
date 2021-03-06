import { connect } from 'react-redux';
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';

const mstp = ({ entities, session }) => {
  
  return {
    currentUser: entities.users[session.id]
  }
}

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mstp, mdtp)(NavBar);