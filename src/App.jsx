import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div>
         <Header />
         <Home />
        
      </div>
      
    </Router>
  )
}

export default App
