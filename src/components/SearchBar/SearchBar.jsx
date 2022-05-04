import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
  getMovies,
  addMovieFavorite,
} from "../../redux/actions";


export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="inline">
            <input
              className="border-2 border-zinc-300"
              id="title"
              type="text"
              placeholder="Find a movie..."
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit" className="border-2 border-zinc-300">Search</button>
          </div>
        </form>
        <ul>
         {
          this.props.moviesLoaded?.map(m => {
            return (
              <li key={m.imdbID}>
                <div>
                  <Link to={`movie/${m.imdbID}`}>
                    <p>{m.Title}</p>
                  </Link>
                  <p>{m.Type}</p>
                  <img src={m.Poster} alt="movie poster" />
                  <p>{m.Year}</p>
                  <button onClick={() => this.props.addMovieFavorite({
                    imdbID: m.imdbID,
                    Title: m.Title,
                    Year: m.Year,
                    Type: m.Type,
                    Poster: m.Poster})}>
                    FAV
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
};


function mapStateToProps(state) {
  return {
    moviesLoaded: state.moviesLoaded
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);



