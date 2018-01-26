import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm) {
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm
    };
};

export function addApiData(apiData) {
    return {
        type: ADD_API_DATA,
        payload: apiData
    };
};

export function getAPIDetails(imdbID) {
    return (dispatch) => {
        axios
            .get(`http://localhost:3000/${imdbID}`)
            .then(response => {
                dispatch(addApiData(response.data));
            })
            .catch(error => {
                console.error('axios error', error);
            });
    };
};
