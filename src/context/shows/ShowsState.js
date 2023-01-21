 import {useReducer} from 'react';
import axios from 'axios';
import ShowsContext from './showsContext';
import ShowsReducer from './showsReducer';
import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW,
    INTITAL_SHOWS
} from '../types';


const ShowsState = (props) => {

   const intitalizeState = {
    showsSearch: [],
    allShows: [],
    singleShow: {},
    loading: false
   }

   const [state, dispatch] = useReducer(ShowsReducer, intitalizeState)

   const searchShows = async(searchTerm)=> {
        dispatch({type: SET_LOADING});

        const {data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        dispatch({
            type: SEARCH_SHOWS,
            payload: data
        });
        
   }
   const getShows = async(page) => {
        dispatch({type: SET_LOADING});
        
        const {data} = await axios.get(`https://api.tvmaze.com/shows?page=${page}`)
        dispatch({
            type: INTITAL_SHOWS,
            payload: data
        });
   }

   const getSingleShow = async(id) =>{
        dispatch({
            type: SET_LOADING,
        })
        const {data} = await axios.get(`http://api.tvmaze.com/shows/${id}?embed=cast`);
        dispatch({
            type: SET_SINGLE_SHOW,
            payload: data
        })
   }

   const clearSingleShow = () =>{
    dispatch({
        type: CLEAR_SINGLE_SHOW
    })
   }

  return (
    <ShowsContext.Provider
    value={{
        showsSearch: state.showsSearch,
        singleShow: state.singleShow,
        allShows: state.allShows,
        loading: state.loading,
        getShows,
        searchShows,
        getSingleShow,
        clearSingleShow,
    }}>
        {props.children}
    </ShowsContext.Provider>
  )
}

export default ShowsState