import { createContext } from "react";
import initialstate from "./InitialState";

const GlobalContext = createContext(initialstate);

export default GlobalContext