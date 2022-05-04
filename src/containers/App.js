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
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path='/movie/:id' component={Movie} />
      </div>
  );
}

export default App;
