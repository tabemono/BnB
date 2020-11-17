import { connect } from 'react-redux';
import Greeting from "./greeting";
import { logout } from "../../actions/session_actions";

const mstp = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  }
}

const mdtp = dispath => {
  return {
    logout: () => dispath(logout())
  }
}

export default connect(mstp, mdtp)(Greeting);