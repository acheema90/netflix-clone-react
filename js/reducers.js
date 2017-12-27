import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
    searchTerm: ''
};

const setSearchTerm = (state, action) => {
    // must retun new state
    // so we return a new obejct with old state and the new searchTerm
    return Object.assign({}, state, {searchTerm: action.payload });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return setSearchTerm(state, action);
        default:
            return state;
    }
};

export default rootReducer;
