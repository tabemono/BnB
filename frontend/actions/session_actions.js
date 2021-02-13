import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then(
      (user) => {
        return dispatch(receiveCurrentUser(user));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user).then(
      (user) => {
        return dispatch(receiveCurrentUser(user));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const fetchUsers = (data) => {
  return (dispatch) => {
    return SessionApiUtil.fetchUsers(data).then((users) => {
      return dispatch(receiveUsers(users));
    });
  };
};
