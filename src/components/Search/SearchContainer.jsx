import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Index from '../Results/Index';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breaches: ['none']
    };
    this.getBreaches = this.getBreaches.bind(this);
  }

  getBreaches(breachArray) {
    if (breachArray) {
      this.setState({ breaches: breachArray });
    }
    console.log(this.state);
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div className="search-container">
        <SearchBar sendBreaches={this.getBreaches} />
        <Index breaches={this.state.breaches} />
      </div>
    );
  }
}

export default SearchContainer;
