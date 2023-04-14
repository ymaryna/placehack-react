import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Navbargeneral from "./components/Navbargeneral";
import Search from "./components/Search";
import Search2 from "./components/Search2";

function App() {
  return (
    <Router>
      <Navbargeneral />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/search2' element={<Search2/>} />
      </Routes>
    </Router>

  );
}

export default App;

