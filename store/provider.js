import { GlobalStateContext } from "./context";

export const GlobalStateProvider = ({children}) => {
    return (
        <GlobalStateContext.Provider value={{counter: 0}}>
            {children}
        </GlobalStateContext.Provider>
    )
}
