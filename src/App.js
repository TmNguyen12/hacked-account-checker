import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 

import SearchContainer from './components/Search/SearchContainer';

class App extends Component {
  componentDidMount() {
    let wrap = document.getElementsByClassName('App')[0]; 
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 165) {
        wrap.classList.add('fix-search'); 
      } else {
        wrap.classList.remove('fix-search'); 
      }
    }); 
  }



  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='content'>
          <Hero />
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default App;
