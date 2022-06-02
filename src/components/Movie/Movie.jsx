import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail, addMovieFavorite } from '../../redux/actions';
import { BsBookmarkStar, BsArrowLeftSquare } from 'react-icons/bs';
import Loading from '../Loading/Loading.jsx';


function Movie() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    dispatch(getMovieDetail(id))
  }, [dispatch, id])

  const movieDetail = useSelector((state) => state.movieDetail)

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
        (!movieDetail.Poster && !movieDetail.Title && !movieDetail.Plot && !movieDetail.Released)
          ? <div className='flex flex-row justify-center mt-24'><Loading /></div>
          : <div>
            <Link to="/">
              <button className='mb-4 text-red-300 hover:text-red-400 text-3xl mt-40'>
                <BsArrowLeftSquare />
              </button>
            </Link>
            <div className='flex flex-row bg-gray-600 rounded-xl mt-4'>
              <div>
                <img className='w-96 h-full object-cover rounded-l-xl' src={movieDetail.Poster} alt="movie poster" />
              </div>
              <div className='ml-10'>
                <div className='flex flex-row'>
                  <h3 className='text-2xl font-bold text-red-400'>{movieDetail.Title}</h3>
                  <button className="text-red-300 hover:text-red-400 text-2xl ml-4" onClick={() => {
                    dispatch(addMovieFavorite(movieDetail))
                    setFavorite(true)
                    setTimeout(() => {
                      setFavorite(false)
                    }, 1500)
                  }}>
                    <BsBookmarkStar />
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
                <p>Actors: {movieDetail.Actors}</p>
              </div>
            </div >
          </div>
      }
    </div >
  );
}

export default Movie;

