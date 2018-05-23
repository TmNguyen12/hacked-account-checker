import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchBreachedAccounts from '../../util/search_util';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleKey = this.handleKey.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bubbleUpResults = this.bubbleUpResults.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleKey(e, field) {
    if (e.keyCode === 9 && field === 'text') {
      e.preventDefault();
      document.getElementsByClassName('search-bar-button')[0].focus();
    } else if (e.keyCode === 13 && this.state.text) {
      this.handleSubmit();
    }
  }

  bubbleUpResults() {
    fetchBreachedAccounts(this.state.text).then(results =>
      this.props.sendBreaches(results.data)
    );
  }

  // TODO: create a validEmail that searchs for regex of an @ and a .com

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    this.bubbleUpResults();
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="email address"
          className="search-text"
          onChange={this.update('text')}
          onKeyDown={e => this.handleKey(e, 'text')}
        />
        <input
          type="button"
          className="search-button"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  sendBreaches: PropTypes.func
};

export default SearchBar;
