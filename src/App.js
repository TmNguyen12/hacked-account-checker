import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 

import SearchContainer from './components/Search/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <SearchContainer />
      </div>
    );
  }
}

export default App;
