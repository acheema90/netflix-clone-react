import { combineReducers } from 'redux';
import { SET_SEARCH_TERM } from './actions';

const setSearchTerm = (state = '', action) => {
    if (action.type === SET_SEARCH_TERM) {
        return action.payload;
    }
    return state;
};

const rootReducer = combineReducers({searchTerm: setSearchTerm});

export default rootReducer;
