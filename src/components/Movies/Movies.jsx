import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { BsBookmarkStar, BsFillBookmarkStarFill } from 'react-icons/bs'
import {
    getMovies,
    addMovieFavorite,
    removeMovieFavorite,
    reset
} from "../../redux/actions";
import Loading from "../Loading/Loading.jsx";


function Movies() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    const [favorite, setFavorite] = useState(false);
    const [remove, setRemove] = useState(false);

    const moviesLoaded = useSelector((state) => state.moviesLoaded)
    const moviesFavorites = useSelector((state) => state.moviesFavorites)

    return (
        <div className="flex flex-col">
            <ul className="flex flex-wrap justify-center absolute mt-40 pb-24 w-full">
                {
                    favorite
                        ? <div className="z-20 mt-52 fixed">
                            <div className="bg-white border-l-4 border-teal-500 text-teal-900 p-4 w-64 rounded-xl" role="alert">
                                <p className="font-bold text-center"> ✔ Movie added to favorites</p>
                            </div>
                        </div>
                        : null
                }
                {
                    remove
                        ? <div className="z-20 mt-52 fixed">
                            <div className="bg-white border-l-4 border-red-500 text-red-900 p-4 w-64 rounded-xl" role="alert">
                                <p className="font-bold text-center"> Movie removed from favorites</p>
                            </div>
                        </div>
                        : null
                }
                {
                    moviesLoaded.length === 0
                        ? <Loading />
                        : moviesLoaded.length !== 0
                            ? moviesLoaded.map((movie) => (
                                <li className="group p-4 px-12 mt-12 hover:scale-[1.2] ease-in-out duration-150" key={movie.imdbID}>
                                    <div className="flex inline mb-2 mx-auto">
                                        <Link to={`/movies/${movie.imdbID}`}>
                                            <div className="w-56 max-h-12">
                                                <h2 className="text-xl text-red-400 group-hover:text-red-500 font-bold mr-3 truncate">
                                                    {movie.Title}
                                                </h2>
                                            </div>
                                        </Link>
                                        <button className="text-red-300 text-2xl hover:text-red-400" onClick={() => {
                                            moviesFavorites.find(m => m.imdbID === movie.imdbID)
                                                ? dispatch(removeMovieFavorite(movie.imdbID)) && setRemove(true)
                                                : dispatch(addMovieFavorite(movie)) && setFavorite(true)

                                            setTimeout(() => {
                                                setFavorite(false)
                                                setRemove(false)
                                            }, 1500)
                                        }}>
                                            {
                                                moviesFavorites.find(m => m.imdbID === movie.imdbID)
                                                    ? <BsFillBookmarkStarFill />
                                                    : <BsBookmarkStar />
                                            }
                                        </button>
                                    </div>
                                    <Link to={`/movies/${movie.imdbID}`}>
                                        <img className="w-64 h-96 object-cover shadow-lg shadow-black" src={movie.Poster} alt="movie poster" />
                                    </Link>
                                    <p className="text-red-400 p-2 bg-neutral-900 opacity-0 group-hover:opacity-100 bg-opacity-90 duration-300 transform -translate-y-10">{movie.Type} ({movie.Year})</p>
                                </li>
                            ))
                            : <p className="text-2xl text-red-400 mt-20">No results... :(</p>
                }
            </ul>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        moviesLoaded: state.moviesLoaded
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
        getMovies: title => dispatch(getMovies(title))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies);