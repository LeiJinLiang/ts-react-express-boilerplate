import { combineReducers } from "redux";
import { enthusiasmReducer } from "./hello";
import { remoteReducer } from "./remote";

export default combineReducers({
  enthusiasmReducer,
  remoteReducer
});
