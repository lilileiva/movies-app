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
        let favs = []
        let moviesFav = state.moviesFavorites.filter(game => game.imdbID !== action.payload.imdbID)
        // moviesFav = moviesFav.filter(game => game.imdbID !== action.payload.imdbID)
        if (moviesFav.length !== 0) {
            favs = moviesFav   
            favs.push(action.payload)
        } else {
            favs.push(action.payload)
        }
        return {
            ...state,
            moviesFavorites: favs
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