export default (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return parseInt(state) + 1;
        case 'DECREMENT':
            return parseInt(state) - 1;
        case 'CLEAR':
            return 0;
        case 'INPUT':
            return action.payload;
        default:
            return state;
    }
}