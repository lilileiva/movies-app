// import React from 'react';
// import { Route } from "react-router-dom";
// import SearchBar from '../components/SearchBar/SearchBar.jsx';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//         <SearchBar />
//     </div>
//   );
// }

// export default App;

import React from "react";

import { Route } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Movie from "../components/Movie/Movie.jsx";

function App() {
  return (
      <React.Fragment>
          <SearchBar />
          {/* <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} /> */}
      </React.Fragment>
  );
}

export default App;
