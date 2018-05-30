import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Display from '../Results/Display'; 

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breaches: ['none']
    };
    this.getBreaches = this.getBreaches.bind(this);
  }
  
  
  getBreaches(breachArray) {
    const noBreach = [{Title: 'No Breaches Found!'}]; 
    if (breachArray) {
      this.setState({ breaches: breachArray });
    } else {
      this.setState({breaches: noBreach})
    }
  }

  render() {
    return (
      <div className="search-container">
        <SearchBar sendBreaches={this.getBreaches} />
        <Display breaches={this.state.breaches}/>
      </div>
    );
  }
}

export default SearchContainer;

