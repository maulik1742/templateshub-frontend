import * as actionTypes from "../ActionTypes";

const initialState = {
  isLoggedIn: false,
  error: "",
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_INIT:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default store;
