import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../redux/actions";
import { BsFillTrashFill, BsArrowLeftSquare } from 'react-icons/bs';


export class ConnectedList extends Component {

  render() {
    return (
      <div className="container mx-auto">
        <div className="flex inline">
          <Link to="/">
            <button className='mb-4 text-red-300 hover:text-red-400 text-3xl mr-4'>
              <BsArrowLeftSquare/>
            </button>
          </Link>
          <h2 className="text-3xl">Favorites</h2>
        </div>
        <ul className="flex flex-wrap justify-center">
          {
            this.props.moviesFavorites ? this.props.moviesFavorites.map(m => (
              <li className="bg-gray-600 p-4 mx-10 my-10 rounded-xl" key={m.imdbID}>
                <div>
                  <div className="flex inline mb-2 mx-auto">
                    <Link to={`movie/${m.imdbID}`}>
                      <div className="w-56 max-h-12">
                        <h2 className="text-xl text-red-400 hover:text-red-500 font-bold mr-3 truncate">{m.Title}</h2>
                      </div>
                    </Link>
                    <button className="text-red-300 hover:text-red-400"
                      onClick={() => {
                        this.props.removeMovieFavorite(m.imdbID)
                        alert(`${m.Title} was removed from favorites`)
                      }
                      }>
                      <BsFillTrashFill />
                    </button>
                  </div>
                  <img className="w-64 h-96" src={m.Poster} alt="movie poster" />
                  <p className="text-red-400">{m.Type} ({m.Year})</p>

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
