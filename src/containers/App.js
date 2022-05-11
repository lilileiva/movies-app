import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Home from "../components/Home/Home.jsx";
import Movie from "../components/Movie/Movie.jsx";
import Movies from "../components/Movies/Movies.jsx";
import Favorites from "../components/Favorites/Favorites.jsx";
import About from "../components/About/About.jsx";


function App() {

  return (
      <div className="text-lg h-full">
        <Navbar />
        <Route path="/" component={SearchBar} />
        <Route exact path="/" component={Home} />
        <Route path='/movies' component={Movies} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path='/movie/:id' component={Movie} />
        <Route exact path='/about' component={About} />
      </div>
  );
}

export default App;
