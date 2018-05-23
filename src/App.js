import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SearchContainer from './components/Search/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchContainer />
      </div>
    );
  }
}

export default App;
