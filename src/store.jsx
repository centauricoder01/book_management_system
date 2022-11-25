import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Data_Redux/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  Reducer,
  composeEnhancers(applyMiddleware(thunk))
);
export { store };
