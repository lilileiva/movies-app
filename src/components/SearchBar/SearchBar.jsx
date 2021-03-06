import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {
  getMovies,
  addMovieFavorite,
} from "../../redux/actions";
import { BiSearchAlt } from 'react-icons/bi'


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
    this.props.history.push('/movies')
  }

  render() {
    const { title } = this.state;
    return (
      <div className="absolute z-20 top-32 w-full">
        <form onSubmit={(e) => this.handleSubmit(e)} >
          <div className="flex justify-center">
            <input
              className="border-2 border-zinc-300 rounded-sm mr-2 w-80"
              id="title"
              type="text"
              placeholder=" Find a movie..."
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit" className="text-red-500 hover:text-red-400 text-3xl px-2 rounded-xl">
                <BiSearchAlt />
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



