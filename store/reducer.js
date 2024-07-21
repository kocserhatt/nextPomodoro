export const globalStateReducer = (state, action) => {
    const { type, payload } = action;
    
    
    switch (type) {
        case "changeTime":
            const { key, value } = payload;
            return {
                ...state,
                time: {
                    ...state.time,
                    [key]: value
                }
            }
        default:
            return {
                ...state
            }
    }   
}