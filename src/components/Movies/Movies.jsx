import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { BsBookmarkStar } from 'react-icons/bs'
import {
    getMovies,
    addMovieFavorite,
} from "../../redux/actions";


function Movies(state) {
    return (
        <ul className="flex flex-wrap justify-center mt-32">
            {
                state.moviesLoaded
                    ? state.moviesLoaded.map(m => (
                        <li className="bg-gray-600 p-4 mx-10 my-10 rounded-xl" key={m.imdbID}>
                            <div className="flex inline mb-2 mx-auto">
                                <Link to={`/movies/${m.imdbID}`}>
                                    <div className="w-56 max-h-12">
                                        <h2 className="text-xl text-red-400 hover:text-red-500 font-bold mr-3 truncate">{m.Title}</h2>
                                    </div>
                                </Link>
                                <button className="text-red-300 text-2xl hover:text-red-400" onClick={() => {
                                    state.addMovieFavorite({
                                        imdbID: m.imdbID,
                                        Title: m.Title,
                                        Year: m.Year,
                                        Type: m.Type,
                                        Poster: m.Poster
                                    })
                                    alert(`${m.Title} was added to favorites`)
                                }
                                }>
                                    <BsBookmarkStar />
                                </button>
                            </div>
                            <Link to={`/movies/${m.imdbID}`}>
                                <img className="w-64 h-96 object-cover" src={m.Poster} alt="movie poster" />
                            </Link>
                            <p className="text-red-400">{m.Type} ({m.Year})</p>
                        </li>
                    ))
                    : <p className="text-2xl text-red-400 mt-10">No results... :(</p>
            }
        </ul>
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
