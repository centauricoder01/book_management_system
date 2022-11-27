import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Data_Redux/Reducer";
import { Auth_Reducer } from "./Auth_Redux/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootreducer = combineReducers({ Reducer, Auth_Reducer });

const store = legacy_createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
export { store };
