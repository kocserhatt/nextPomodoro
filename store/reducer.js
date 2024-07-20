export const globalStateReducer = (state, action) => {
    const { type, payload } = action;
    
    
    switch (type) {
        case "changeCounter":
            return {
                ...state,
                counter: payload
            }
        default:
            return {
                ...state
            }
    }   
}