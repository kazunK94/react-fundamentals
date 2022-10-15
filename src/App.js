import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import NameList from './components/Pages/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import { Fragment } from 'react';


function App() {
  return (
    <Router>
        <HeaderBar/>
        <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/namelist" element={<NameList/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
  );
}

export default App;
