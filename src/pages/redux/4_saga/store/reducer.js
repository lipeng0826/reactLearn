// reducer
const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'ADD': return { count: state.count + 1 };
        default: return state;
    }
}
export default reducer;