import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../redux/actions";
import { BsFillTrashFill, BsArrowLeftSquare } from 'react-icons/bs';


export class Favorites extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div className="flex inline">
          <Link to="/">
            <button className='mb-4 text-red-300 hover:text-red-400 text-3xl ml-4 mr-4 mt-40'>
              <BsArrowLeftSquare />
            </button>
          </Link>
          <h2 className="text-3xl mt-40">Favorites</h2>
        </div>
        <ul className="flex flex-wrap justify-center mt-4">
          {
            this.props.moviesFavorites.length !== 0
              ? this.props.moviesFavorites.map(m => (
                <li className="bg-gray-600 p-4 mx-10 my-10 rounded-xl" key={m.imdbID}>
                  <div>
                    <div className="flex inline mb-2 mx-auto">
                      <Link to={`movies/${m.imdbID}`}>
                        <div className="w-56 max-h-12">
                          <h2 className="text-xl text-red-400 hover:text-red-500 font-bold mr-3 truncate">{m.Title}</h2>
                        </div>
                      </Link>
                      <button className="text-red-300 hover:text-red-400"
                        onClick={() => {
                          this.props.removeMovieFavorite(m.imdbID)
                        }
                        }>
                        <BsFillTrashFill />
                      </button>
                    </div>
                    <img className="w-64 h-96" src={m.Poster} alt="movie poster" />
                    <p className="text-red-400">{m.Type} ({m.Year})</p>
                  </div>
                </li >
              ))
              : <div className="flex flex-col container mx-auto">
                <div className='flex justify-center'>
                  <div className='flex flex-col bg-gray-500 rounded-xl w-fit p-10 text-xl text-center mt-32'>
                    <h4>You haven't added movies to this section yet...</h4>
                  </div>
                </div>
              </div>
          }
        </ul>
      </div >
    );
  }
}


const mapStateToProps = (state) => {
  return {
    moviesFavorites: state.moviesFavorites
  }
}

export default connect(mapStateToProps, { removeMovieFavorite })(Favorites);
