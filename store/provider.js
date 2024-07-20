
import { GlobalStateContext } from "./context";
import { useReducer } from "react";
import { globalStateReducer } from "./reducer";
import { initialState } from "./constant";

export const GlobalStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);

    return (
        <GlobalStateContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalStateContext.Provider>
    )
}
