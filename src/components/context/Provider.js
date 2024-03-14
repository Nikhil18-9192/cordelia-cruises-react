import React,{useReducer} from "react";
import GlobalContext from "./CreateContext";
import initialstate from "./InitialState";
import reducer from "./Reducer";


function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, initialstate);
    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default Provider;