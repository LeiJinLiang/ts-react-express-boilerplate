import axios from "axios";
import { Dispatch } from "redux";
import * as constants from "../constants";
import { API } from "../config";

export const REMOTEDATA = (dispatch: Dispatch) => {
  dispatch({ type: constants.REQUEST_START });
  axios
    .get(API.remote)
    .then(response => {
      dispatch({ type: constants.RECEIVE_DATA, data: response.data });
    })
    .catch(err => {
      dispatch({ type: constants.ERR, err: err });
    });
};
