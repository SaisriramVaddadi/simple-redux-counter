import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer
});
export default reducers;
