const initState = {
    text: 'Another Reducer'
};

export default (state = initState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}