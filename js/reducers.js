import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

const setSearchTerm = (state = '', action) => {
    if (action.type === SET_SEARCH_TERM) {
        return action.payload;
    }
    return state;
};

const apiData = (state = {}, action) => {
    if (action.type === ADD_API_DATA) {
        return Object.assign({}, state, { [action.payload.imdbID] : action.payload
        });
    }
    return state;
};

const rootReducer = combineReducers({
    searchTerm: setSearchTerm,
    apiData: apiData
});

export default rootReducer;
