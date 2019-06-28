import { createStore, applyMiddleware } from "redux";
import { enthusiasm } from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk, logger);

export const store = createStore<any, any, any, any>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: "TS"
  } as any,
  middleware
);
