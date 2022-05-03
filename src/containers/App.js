import React from "react";
import { Route } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import Movie from "../components/Movie/Movie.jsx";
import Favorites from "../components/Favorites/Favorites.jsx";
import './App.css';

function App() {
  return (
      <div>
        <NavBar />
        <Route exact path="/">
          <SearchBar />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        {/* <Route exact path="/movie/:id">
          <Movie />
        </Route> */}
        <Route path='/movie/:id' element={<Movie />} />
      </div>
  );
}

export default App;
