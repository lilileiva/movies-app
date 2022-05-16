import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { BsBookmarkStar, BsFillBookmarkStarFill } from 'react-icons/bs'
import {
    getMovies,
    addMovieFavorite,
} from "../../redux/actions";
import Loading from "../Loading/Loading.jsx";


function Movies(state) {
    const [loading, setLoading] = useState(true)
    const [favorite, setFavorite] = useState(false);
    
    const loaded = useSelector((state) => state.moviesLoaded)

    useEffect(() => {
        if (loaded) {
            setLoading(false);
        }
    })

    return (
        <div className="flex flex-col">
            {
                favorite
                    ? <div className="mx-64 z-20 mt-52">
                        <div class="bg-white border-l-4 border-teal-500 text-teal-900 p-4 mx-64 rounded-xl" role="alert">
                            <p class="font-bold"> ✔ Movie added to favorites</p>
                        </div>
                    </div>
                    : null
            }
            <ul className="flex flex-wrap justify-center absolute mt-40 w-full">
                {
                    loading
                        ? <Loading />
                        : state.moviesLoaded
                            ? state.moviesLoaded.map((movie) => (
                                <li className="bg-gray-600 p-4 mx-10 my-10 rounded-xl" key={movie.imdbID}>
                                    <div className="flex inline mb-2 mx-auto">
                                        <Link to={`/movies/${movie.imdbID}`}>
                                            <div className="w-56 max-h-12">
                                                <h2 className="text-xl text-red-400 hover:text-red-500 font-bold mr-3 truncate">
                                                    {movie.Title}
                                                </h2>
                                            </div>
                                        </Link>
                                        <button className="text-red-300 text-2xl hover:text-red-400" onClick={() => {
                                            state.addMovieFavorite({
                                                imdbID: movie.imdbID,
                                                Title: movie.Title,
                                                Year: movie.Year,
                                                Type: movie.Type,
                                                Poster: movie.Poster
                                            })
                                            setFavorite(true)
                                            setTimeout(() => {
                                                setFavorite(false)
                                            }, 1500)
                                        }
                                        }>
                                            <BsBookmarkStar />
                                        </button>
                                    </div>
                                    <Link to={`/movies/${movie.imdbID}`}>
                                        <img className="w-64 h-96 object-cover" src={movie.Poster} alt="movie poster" />
                                    </Link>
                                    <p className="text-red-400">{movie.Type} ({movie.Year})</p>
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
