import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW,
    INTITAL_SHOWS
} from '../types';

const showsReducer = (state, action) =>{
    switch(action.type) {
        case SET_LOADING: 
            return {
                ...state, 
                loading: true,
            }
        
        case SEARCH_SHOWS:
            return {
                ...state,
                allShows: [], 
                showsSearch: action.payload,
                loading: false,
            }
        case INTITAL_SHOWS:
            return {
                ...state, 
                showsSearch: [],
                allShows: action.payload,
                loading: false,
            }
        case SET_SINGLE_SHOW:
            return {
                ...state, 
                singleShow: action.payload,
                loading: false
            }
        case CLEAR_SINGLE_SHOW:
            return {
                ...state,
                singleShow: {}
            }    
        
        default:
            return state;
    }
}
export default showsReducer;