import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../redux/actions";


export class ConnectedList extends Component {

  render() {
    return (
      <div className="container mx-auto">
        <h2 className="text-3xl">Favorites</h2>
        <ul className="flex flex-wrap justify-center">
          {
            this.props.moviesFavorites ? this.props.moviesFavorites.map(m => (
                <li className="bg-neutral-800 p-4 mx-10 my-10 rounded-xl" key={m.imdbID}>
                  <div>
                    <div className="flex inline mb-2 mx-auto">
                      <Link to={`movie/${m.imdbID}`}>
                        <div className="w-56 max-h-12">
                          <h2 className="text-xl text-red-400 font-bold mr-3 truncate">{m.Title}</h2>
                        </div>
                      </Link>
                    </div>
                    <p className="text-red-400">{m.Type}</p>
                    <img className="w-64 h-96" src={m.Poster} alt="movie poster" />
                    <p className="text-red-400">{m.Year}</p>
                    <button className="border-2 border-zinc-300 bg-neutral-500 rounded-xl"
                      onClick={() => {
                        this.props.removeMovieFavorite(m.imdbID)
                        alert(`${m.Title} was removed from favorites`)
                      }
                    }>
                      X
                    </button>
                  </div>
                </li>
              )
            ) : <p>No movies</p>
          }
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    moviesFavorites: state.moviesFavorites
  }
}

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
