import * as actionTypes from "../ActionTypes";

const initialState = {
  subCategories: [],
  error: "",
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        subCategories: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default store;
