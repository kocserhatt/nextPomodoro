import { createContext, useContext } from "react";

export const GlobalStateContext = createContext(null);

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext)

    if(!context)
        throw new Error('Context must be within scope!');

    return context;
    
}
