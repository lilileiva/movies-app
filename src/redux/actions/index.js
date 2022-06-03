export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const RESET = "RESET";


const { API_KEY } = process.env;


export function getMovies(title) {
    return function(dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "GET_MOVIES",
                payload: data
            })
        })
    }
};

export function getMovieDetail(id) {
    return function(dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "GET_MOVIE_DETAIL",
                payload: data
            })
        })
    }
};

export function addMovieFavorite(payload) {
    return {
        type: "ADD_MOVIE_FAVORITE",
        payload
    }
};

export function removeMovieFavorite(id) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: id
    }
};

export function reset() {
    return {
        type: "RESET"
    }
}