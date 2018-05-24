import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

class Item extends Component {
  constructor(props) {
    super(props);

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription(e) {
    console.log('e',e);
    let shownItem = document.getElementsByClassName('show'); 
    console.log('shown item', shownItem); 
    debugger 
    if (shownItem.length > 0) {
      shownItem[0].classList.add('hidden'); 
      shownItem[0].classList.remove('show'); 
    }
    let itemText = document.getElementById(e.target.dataset.internalid);
    itemText.classList.remove('hidden');
    itemText.classList.add('show');  
  }

  render() {
    const { breach } = this.props;
    return (
      <div className="result-item" data-internalid={`${breach.Title}`} onClick={this.toggleDescription}>
        <div className="logo-container" data-internalid={`${breach.Title}`}>
          <img
            src={`//logo.clearbit.com/${breach.Domain}`}
            className="logo"
            alt="logo"
            data-internalid={`${breach.Title}`}
          />
        </div>
        <div
          className={`result-text ${breach.Title}`}
          
          data-internalid={`${breach.Title}`}
        >
          <p className="Title" data-internalid={`${breach.Title}`}>{breach.Title}</p>
          <p className="breach-date" data-internalid={`${breach.Title}`}>Breach Date: {breach.BreachDate}</p>
          <div
            className="description hidden" id={`${breach.Title}`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(breach.Description)
            }}
          />
          <p className="data-classes" data-internalid={`${breach.Title}`}>
            Compromised Data: <br /> {breach.DataClasses.join(', ')}
          </p>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  breach: PropTypes.object
};

export default Item;
