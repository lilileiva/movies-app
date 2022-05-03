import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../redux/actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}

          {this.props.moviesFavorites?.map(m => {
            return (
              <li>
                <div key={m.imdbID}>
                  <Link to={`movie/${m.imdbID}`}>
                    <h3>{m.Title}</h3>
                  </Link>
                  <p>{m.Type}</p>
                  <img src={m.Poster} />
                  <p>{m.Year}</p>
                  <button onClick={() => this.props.removeMovieFavorite(m.imdbID)}>X</button>
                </div>
              </li>
            )
          })}

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
