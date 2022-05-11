import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {
  getMovies,
  addMovieFavorite,
} from "../../redux/actions";
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
    this.setState({title: ''})
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
            <button type="submit" className="text-red-500 hover:text-red-400 text-3xl px-2 rounded-xl">
              <Link to='/movies'>
              <BiSearchAlt />
              </Link>
            </button>
          </div>
        </form>
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



