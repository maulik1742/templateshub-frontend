import * as actionTypes from "../ActionTypes";

const initialState = {
    template: [],
    error: "",
};

const store = (state = initialState, action) => {
    console.log('action?.payload :>> ', action?.payload);
    switch (action.type) {
        case actionTypes.GET_TEMPLATE_SUCCESS:
            return {
                ...state,
                template: action?.payload?.data,
            };

        default:
            return state;
    }
};

export default store;
