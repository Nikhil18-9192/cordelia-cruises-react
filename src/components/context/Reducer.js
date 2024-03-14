function reducer(state, action){
    switch (action.type) {
        case "toggle":
            return {
                ...state,
                toggle: action.payload,
                };
        default:
            return state
    }
}

export default reducer;