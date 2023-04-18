import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/homePage";
import LibraryPage from "./Components/libraryPage";
import ContributePage from "./Components/contributePage";
import MainPage from "./Components/mainPage";

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/library" element={<LibraryPage/>} />
        <Route path="/contribute" element={<ContributePage/>} />
      </Routes>
    </Router>
    
  );
};

export default App;
