import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Home from './components/Home';
import Home from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit test<code>src/App.js</code>.
        </p>
        <h2>unspam</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home/>
        <Search/>
        <Button/>
      </header>
    </div>
  );
}

export default App;