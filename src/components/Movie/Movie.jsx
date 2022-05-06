import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovieDetail, addMovieFavorite } from '../../redux/actions';
import { BsBookmarkStar, BsArrowLeftSquare } from 'react-icons/bs'

class Movie extends React.Component {

  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id)
  }

  render() {
    return (
      <div className='container mx-auto flex flex-col'>
        <Link to="/">
          <button className='mb-4 text-red-400 text-3xl'>
            <BsArrowLeftSquare/>
          </button>
        </Link>
        <div className='flex flex-row'>
          <div>
            <img className='w-80' src={this.props.movieDetail.Poster} alt="movie poster" />
          </div>
          <div className='ml-10'>
            <div className='flex flex-row'>
              <h3 className='text-2xl font-bold'>{this.props.movieDetail.Title}</h3>
              <button className="text-red-300 text-2xl ml-4" onClick={() => {
                this.props.addMovieFavorite({
                  imdbID: this.props.movieDetail.imdbID,
                  Title: this.props.movieDetail.Title,
                  Year: this.props.movieDetail.Year,
                  Type: this.props.movieDetail.Type,
                  Poster: this.props.movieDetail.Poster
                })
                alert(`${this.props.movieDetail.Title} was added to favorites`)
              }
              }>
                <BsBookmarkStar/>
              </button>
            </div>
            <br/>
            <p className='text-xl'>{this.props.movieDetail.Plot}</p>
            <br/>
            <p>Released: {this.props.movieDetail.Released}</p>
            <p>Genre: {this.props.movieDetail.Genre}</p>
            <p>Director: {this.props.movieDetail.Director}</p>
            <p>Running time: {this.props.movieDetail.Runtime}</p>
            <p>Writer: {this.props.movieDetail.Writer}</p>
            <p>Actors: {this.props.movieDetail.Actors}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovieDetail: movie => dispatch(getMovieDetail(movie))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);