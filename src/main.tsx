import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Client } from "./client";

ReactDOM.render(
  <Provider store={store}>
    <Client />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
