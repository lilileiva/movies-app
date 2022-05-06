import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
  getMovies,
  addMovieFavorite,
} from "../../redux/actions";
import Movies from "../Movies/Movies.jsx";
import { BiSearchAlt } from 'react-icons/bi'
import { BsBookmarkStar } from 'react-icons/bs'


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
      <div className="container mx-auto">
        <form className="flex justify-center" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="flex inline">
            <input
              className="border-2 border-zinc-300 rounded-xl mr-2"
              id="title"
              type="text"
              placeholder="Find a movie..."
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit" className="text-red-500 text-3xl px-2 rounded-xl">
              <BiSearchAlt/>
            </button>
          </div>
        </form>
        <ul className="flex flex-wrap justify-center">
         {
          this.props.moviesLoaded ? this.props.moviesLoaded.map(m => (
              <li className="bg-neutral-800 p-4 mx-10 my-10 rounded-xl" key={m.imdbID}>
                <div className="flex inline mb-2 mx-auto">
                  <Link to={`movie/${m.imdbID}`}>
                    <div className="w-56 max-h-12">
                      <h2 className="text-xl text-red-400 font-bold mr-3 truncate">{m.Title}</h2>
                    </div>
                  </Link>
                  <button className="text-red-300 text-2xl" onClick={() => {
                    this.props.addMovieFavorite({
                      imdbID: m.imdbID,
                      Title: m.Title,
                      Year: m.Year,
                      Type: m.Type,
                      Poster: m.Poster
                    })
                    alert(`${m.Title} was added to favorites`)
                  }
                  }>
                    <BsBookmarkStar/>
                  </button>
                </div>
                <Link to={`movie/${m.imdbID}`}>
                  <img className="w-64 h-96" src={m.Poster} alt="movie poster" />
                </Link>
                <p className="text-red-400">{m.Type} ({m.Year})</p>
              </li>
              )
            ) : <p className="text-2xl text-red-400 mt-10">No results... :(</p>

           //this.props.moviesLoaded ? <Movies /> : <p>No hay pelis</p>
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



