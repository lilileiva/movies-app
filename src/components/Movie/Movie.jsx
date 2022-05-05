import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovieDetail, addMovieFavorite } from '../../redux/actions';

class Movie extends React.Component {

    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                Detalle de la pelicula  
                <Link to="/">
                    <button>Volver</button>
                </Link>
                <h3>{this.props.movieDetail.Title}</h3>
                <img src={this.props.movieDetail.Poster} alt="movie poster" />
                <p>{this.props.movieDetail.Plot}</p>
                <p>{this.props.movieDetail.Released}</p>
                <p>{this.props.movieDetail.Genre}</p>
                <p>{this.props.movieDetail.Director}</p>
                <p>{this.props.movieDetail.Runtime}</p>
                <p>{this.props.movieDetail.Writer}</p>
                <p>{this.props.movieDetail.Actors}</p>

                <button className="border-2 border-zinc-300 bg-zinc-100 ml-1 w-10 h-10" onClick={() => {
                      this.props.addMovieFavorite({
                        imdbID: this.props.movieDetail.imdbID,
                        Title: this.props.movieDetail.Title,
                        Year: this.props.movieDetail.Year,
                        Type: this.props.movieDetail.Type,
                        Poster: this.props.movieDetail.Poster})
                      alert(`${this.props.movieDetail.Title} was added to favorites`)
                      }
                    }>
                      ⭐
                    </button>

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