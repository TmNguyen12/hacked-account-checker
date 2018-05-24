import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

class Item extends Component {
  constructor(props) {
    super(props);

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription(e) {

    const shownItem = document.getElementsByClassName('show');
    const itemText = document.getElementById(e.target.dataset.internalid);
    if (shownItem.length > 0 && shownItem[0].id === itemText.id){
      shownItem[0].classList.add('hidden');
      shownItem[0].classList.remove('show');
    } else {
      if (shownItem.length > 0) {
        shownItem[0].classList.add('hidden');
        shownItem[0].classList.remove('show');
      }
    
      itemText.classList.remove('hidden');
      itemText.classList.add('show');
    }
  }

  render() {
    const { breach } = this.props;
    return (
      <div
        className="result-item"
        data-internalid={`${breach.Title}`}
        onClick={this.toggleDescription}
      >
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
          <p className="Title" data-internalid={`${breach.Title}`}>
            {breach.Title}
          </p>
          <p className="breach-date" data-internalid={`${breach.Title}`}>
            Breach Date: {breach.BreachDate}
          </p>
          <div
            className="description hidden"
            data-internalid={`${breach.Title}`}
            id={`${breach.Title}`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(breach.Description)
            }}
          />
          <div className="data-classes" data-internalid={`${breach.Title}`}>
            <div
              className="data-classes-text"
              data-internalid={`${breach.Title}`}
            >
              Compromised Data:{' '}
            </div>
            <div
              className="data-classes-info"
              data-internalid={`${breach.Title}`}
            >
              {breach.DataClasses.join(', ')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  breach: PropTypes.object
};

export default Item;
