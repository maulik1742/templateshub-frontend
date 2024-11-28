import * as actionTypes from "../ActionTypes";

const initialState = {
  categories: [],
  error: "",
};

const store = (state = initialState, action) => {
  console.log("action?.payload :>> ", action);
  switch (action.type) {
    case actionTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action?.payload?.data,
      };
    default:
      return state;
  }
};

export default store;
