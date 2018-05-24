import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

class Item extends Component {
  constructor(props) {
    super(props);

    this.toggleDescription = this.toggleDescription.bind(this);
    this.collapseSection = this.collapseSection.bind(this);
    this.expandSection = this.expandSection.bind(this);
  }

  collapseSection(element) {
    let descriptionHeight = element.scrollHeight;
    let elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(() => {
      element.style.height = descriptionHeight + 'px';
      element.style.transition = elementTransition;

      requestAnimationFrame(() => {
        element.style.height = 0 + 'px';
      });
    });

    element.classList.add('hidden');
    element.classList.remove('show');
  }

  expandSection(element) {
    let descriptionHeight = element.scrollHeight;
    element.style.height = descriptionHeight + 'px';

    window.setTimeout(() => (element.style.height = null), 400);
    element.classList.remove('hidden');
    element.classList.add('show');
  }

  toggleDescription(e) {
    const shownItem = document.getElementsByClassName('show');
    const itemText = document.getElementById(e.target.dataset.internalid);
    if (shownItem.length > 0 && shownItem[0].id === itemText.id) {
      this.collapseSection(shownItem[0]);
    } else {
      if (shownItem.length > 0) {
        this.collapseSection(shownItem[0]);
      }
      this.expandSection(itemText);
    }
  }

  render() {
    const { breach } = this.props;
    return (
      <div
        className="result-item animated fadeInDown"
        id={`result-item-${breach.Title}`}
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
