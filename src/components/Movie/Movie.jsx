import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../redux/actions';
import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
                <h3>{this.props.movieDetail.Title}</h3>
                <img src={this.props.movieDetail.Poster} alt="movie poster" />
                <p>{this.props.movieDetail.Plot}</p>
                <p>{this.props.movieDetail.Released}</p>
                <p>{this.props.movieDetail.Genre}</p>
                <p>{this.props.movieDetail.Director}</p>
                <p>{this.props.movieDetail.Runtime}</p>
                <p>{this.props.movieDetail.Writer}</p>
                <p>{this.props.movieDetail.Actors}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetail: state.movieDetail
    }
}

export default connect(
    mapStateToProps,
    { getMovieDetail }
  )(Movie);