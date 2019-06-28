import * as constants from "../constants";
const initState = {
  isFetching: false,
  fetched: false,
  payload: [],
  err: null
};

export const remoteReducer = (state = initState, action: any) => {
  switch (action.type) {
    case constants.REQUEST_START:
      return { ...state, isFetching: true };
    case constants.RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        payload: action.data
      };
    case constants.ERR:
      return { ...state, fetched: false, err: action.err };
  }
  return state;
};
