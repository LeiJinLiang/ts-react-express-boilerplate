import * as React from "react";

export interface HelloPorps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloPorps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!!!!!!!!!
  </h1>
);
