import {
    GET_MOVIES,
    GET_MOVIE_DETAIL,
    ADD_MOVIE_FAVORITE,
    REMOVE_MOVIE_FAVORITE
} from "../actions";


const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
      if (action.type === GET_MOVIES) {
        return {
            ...state,
            moviesLoaded: action.payload.Search
        }
      }
      else if (action.type === GET_MOVIE_DETAIL) {
          return {
              ...state,
              movieDetail: action.payload
          }
      }
      else if (action.type === ADD_MOVIE_FAVORITE) {
          return {
            ...state,
            moviesFavorites: [...state.moviesFavorites, action.payload]
            //moviesFavorites: [...state.moviesFavorites.filter(m =>  m.imdbID === action.payload), action.payload]
          }
      }
      else if (action.type === REMOVE_MOVIE_FAVORITE) {
          return {
              ...state,
              moviesFavorites: state.moviesFavorites.filter(m => m.imdbID !== action.payload)
          }
      }
      return state;
  }

  export default rootReducer;