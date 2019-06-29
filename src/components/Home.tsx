import * as React from "react";
import { useWindowWidth } from './hooks/useWindowWidth';
export const Home = () => <p>Home..{useWindowWidth()}</p>;
