import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail, addMovieFavorite, removeMovieFavorite } from '../../redux/actions';
import { BsBookmarkStar, BsFillBookmarkStarFill, BsArrowLeftSquare } from 'react-icons/bs';
import Loading from '../Loading/Loading.jsx';


function Movie() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [favorite, setFavorite] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    dispatch(getMovieDetail(id))
  }, [dispatch, id])

  const movieDetail = useSelector((state) => state.movieDetail)
  const moviesFavorites = useSelector((state) => state.moviesFavorites)

  return (
    <div className='container mx-auto flex flex-col'>
      {
        favorite
          ? <div className='flex flex-row justify-center'>
            <div className="z-20 mt-52 fixed">
              <div className="bg-white border-l-4 border-teal-500 text-teal-900 p-4 w-64 rounded-xl" role="alert">
                <p className="font-bold text-center"> ✔ Movie added to favorites</p>
              </div>
            </div>
          </div>
          : null
      }
      {
        remove
          ? <div className='flex flex-row justify-center'>
            <div className="z-20 mt-52 fixed">
              <div className="bg-white border-l-4 border-red-500 text-red-900 p-4 w-64 rounded-xl" role="alert">
                <p className="font-bold text-center"> Movie removed from favorites</p>
              </div>
            </div>
          </div>
          : null
      }
      {
        (!movieDetail.Poster && !movieDetail.Title && !movieDetail.Plot && !movieDetail.Released)
          ? <div className='flex flex-row justify-center mt-24'><Loading /></div>
          : <div>
            <Link to="/movies">
              <button className='mb-4 ml-4 text-red-300 hover:text-red-400 text-3xl mt-40'>
                <BsArrowLeftSquare />
              </button>
            </Link>
            <div className='sm:flex flex-col md:flex-row bg-gray-600 rounded-xl mt-4 mb-10 mx-4'>
              <div className='flex flex-row justify-center'>
                <img className='sm:w-fit h-auto object-cover rounded-xl md:h-full'
                  src={movieDetail.Poster}
                  alt="movie poster"
                />
              </div>
              <div className='ml-10 mr-10'>
                <div className='flex flex-row'>
                  <h3 className='text-2xl font-bold text-red-400 mt-2'>{movieDetail.Title}</h3>
                  <button className="text-red-300 hover:text-red-400 text-2xl ml-4 mt-2" onClick={() => {
                    moviesFavorites.find(m => m.imdbID === id)
                      ? dispatch(removeMovieFavorite(id)) && setRemove(true)
                      : dispatch(addMovieFavorite(movieDetail)) && setFavorite(true)

                    setTimeout(() => {
                      setFavorite(false)
                      setRemove(false)
                    }, 1500)
                  }}>
                    {
                      moviesFavorites.find(m => m.imdbID === id)
                        ? <BsFillBookmarkStarFill />
                        : <BsBookmarkStar />
                    }
                  </button>
                </div>
                <br />
                <p className='text-xl'>{movieDetail.Plot}</p>
                <br />
                <p>Released: {movieDetail.Released}</p>
                <br />
                <p>Genre: {movieDetail.Genre}</p>
                <br />
                <p>Director: {movieDetail.Director}</p>
                <br />
                <p>Running time: {movieDetail.Runtime}</p>
                <br />
                <p>Writer: {movieDetail.Writer}</p>
                <br />
                <p className='mb-2'>Actors: {movieDetail.Actors}</p>
              </div>
            </div >
          </div>
      }
    </div >
  );
}

export default Movie;

