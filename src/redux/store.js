import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import AuthReducer from "./reducer/AuthReducer";
import CategoryReducer from "./reducer/categoryReducer";
import SubCategoryReducer from "./reducer/subCategoryReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Category: CategoryReducer,
  SubCategory: SubCategoryReducer,
});

const initialState = {};

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
