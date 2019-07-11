import * as React from "react";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { Counter2 } from "./hooks/useCounter";
export const Home = () => (
  <>
    <p>Home..{useWindowWidth()}</p>
    <p>{Counter2()}</p>
  </>
);
