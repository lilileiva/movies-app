import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
    getMovies,
    addMovieFavorite,
} from "../../redux/actions";


function Movies() {
    return (
        <ul className="flex flex-wrap justify-center">
            {
                this.props.moviesLoaded?.map(m => (
                    <li className="bg-neutral-800 p-4 mx-20 my-10 rounded-xl" key={m.imdbID}>
                        <div className="flex inline mb-2 mx-auto">
                            <Link to={`movie/${m.imdbID}`}>
                                <div className="w-64 max-h-12">
                                    <h2 className="text-xl text-red-400 font-bold mr-3 truncate">{m.Title}</h2>
                                </div>
                            </Link>
                            <button className="border-2 border-zinc-300 bg-neutral-500 rounded-xl" onClick={() => {
                                this.props.addMovieFavorite({
                                    imdbID: m.imdbID,
                                    Title: m.Title,
                                    Year: m.Year,
                                    Type: m.Type,
                                    Poster: m.Poster
                                })
                                alert(`${m.Title} was added to favorites`)
                            }
                            }>
                                ⭐
                            </button>
                        </div>
                        <Link to={`movie/${m.imdbID}`}>
                            <img className="w-64 h-96" src={m.Poster} alt="movie poster" />
                        </Link>
                        <p className="text-red-400">{m.Type} ({m.Year})</p>
                    </li>
                    )
                )
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

