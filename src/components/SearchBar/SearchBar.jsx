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
      <div className="bg-gray-400 flex-col justify-center mx-10 my-5">
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
        <ul className="flex flex-wrap">
         {
          this.props.moviesLoaded?.map(m => {
            return (
              <li className="bg-white flex-col self-center mx-20 my-10" key={m.imdbID}>
                <div className="">
                  <div className="flex inline mb-2">
                    <Link to={`movie/${m.imdbID}`}>
                      <div className="w-64 max-h-12">
                        <h2 className="text-xl font-bold mr-3 truncate">{m.Title}</h2>
                      </div>
                    </Link>
                    <button className="border-2 border-zinc-300 bg-zinc-100 ml-1 w-10 h-10" onClick={() => this.props.addMovieFavorite({
                      imdbID: m.imdbID,
                      Title: m.Title,
                      Year: m.Year,
                      Type: m.Type,
                      Poster: m.Poster})}>
                      ⭐
                    </button>
                  </div>
                  <Link to={`movie/${m.imdbID}`}>
                    <img className="w-64 h-96" src={m.Poster} alt="movie poster" />
                  </Link>
                  <p className="text-gray-500">{m.Type} ({m.Year})</p>
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



