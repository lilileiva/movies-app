import React from "react";
import { Route } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Movie from "../components/Movie/Movie.jsx";
import Favorites from "../components/Favorites/Favorites.jsx";


function App() {

  return (
      <div className="text-lg bg-neutral-700">
        <Navbar />
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path='/movie/:id' component={Movie} />
      </div>
  );
}

export default App;
