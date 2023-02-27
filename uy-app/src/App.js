import React from 'react';
import './App.css';
import Button from './components/Button';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <Search/>
        <Button/>
      </header>
    </div>
  );
}

export default App;