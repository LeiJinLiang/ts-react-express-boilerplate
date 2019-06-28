import { combineReducers } from "redux";
import { enthusiasm } from "./hello";
import { remoteReducer } from "./remote";

export default combineReducers({
  enthusiasm,
  remoteReducer
});
