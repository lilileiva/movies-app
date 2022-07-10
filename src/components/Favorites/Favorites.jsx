import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { removeMovieFavorite } from "../../redux/actions";
import { BsFillTrashFill, BsArrowLeftSquare } from 'react-icons/bs';


function Favorites() {
  const dispatch = useDispatch()
  const history = useHistory()

  const moviesFavorites = useSelector((state) => state.moviesFavorites)

  return (
    <div className="container mx-auto pb-10">
      <div className="flex inline">
        <button className='mb-4 text-red-300 hover:text-red-400 text-3xl ml-4 mr-4 mt-40' onClick={() => history.goBack()}>
          <BsArrowLeftSquare />
        </button>
        <h2 className="text-3xl mt-40 text-red-500">Favorites</h2>
      </div>
      {
        moviesFavorites ? <p className="flex flex-row relative text-xl ml-4 justify-end text-red-400 border-b-2 border-red-400 self-center w-11/12">{`${moviesFavorites.length} favorites`}</p> : null
      }
      <ul className="flex flex-wrap justify-center mt-4 mx-4">
        {
          moviesFavorites.length !== 0
            ? moviesFavorites.map(m => (
              <li className="p-4 mx-10 my-2" key={m.imdbID}>
                <div>
                  <div className="flex inline mx-auto">
                    <Link to={`movies/${m.imdbID}`}>
                      <div className="w-56 max-h-12">
                        <h2 className="text-xl text-red-400 hover:text-red-500 font-bold mr-3 truncate">{m.Title}</h2>
                      </div>
                    </Link>
                    <button className="text-red-300 hover:text-red-400"
                      onClick={() => {
                        dispatch(removeMovieFavorite(m.imdbID))
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
                <div className='flex flex-col bg-neutral-700 rounded-xl w-fit p-10 text-xl text-center mt-32'>
                  <h4>You haven't added movies to this section yet...</h4>
                </div>
              </div>
            </div>
        }
      </ul>
    </div >
  );
}

export default Favorites;

