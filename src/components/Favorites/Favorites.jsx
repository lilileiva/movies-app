import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../redux/actions";


export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.moviesFavorites?.map(m => {
              return (
                <li key={m.imdbID}>
                  <div>
                    <Link to={`movie/${m.imdbID}`}>
                      <h3>{m.Title}</h3>
                    </Link>
                    <p>{m.Type}</p>
                    <img src={m.Poster} alt="movie poster" />
                    <p>{m.Year}</p>
                    <button onClick={() => {
                      this.props.removeMovieFavorite(m.imdbID)
                      alert(`${m.Title} was removed from favorites`)
                      }
                    }>
                      X
                    </button>
                  </div>
                </li>
              )
            })
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
