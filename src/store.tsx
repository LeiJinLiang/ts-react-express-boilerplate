import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware =
  process.env.NODE_ENV !== "production"
    ? applyMiddleware(thunk, logger)
    : applyMiddleware(thunk);

export const store = createStore<any, any, any, any>(reducer, middleware);
