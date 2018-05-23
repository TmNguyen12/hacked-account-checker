import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor(props){
    super(props); 

    // this.toggleDescription = this.toggleDescription.bind(this); 
  }

  
  // toggleDescription() {
  //   const itemText = document.getElementsByClassName('result-text')[0];
  //   const hiddenNode = document.getElementsByClassName('hidden'); 

  //   console.log('itemText', itemText);
  //   console.log('hiddenNode', hiddenNode); 
  //   if (hiddenNode) {
  //     hiddenNode.classList.remove('hidden');
  //   } else {
  //     hiddenNode.classList.add('hidden');
  //   }
  // }


  render() {
    const { breach } = this.props; 
    return (
      <div className="result-item">
        <div className="logo-container">
          <img
            src={`//logo.clearbit.com/${breach.Domain}`}
            className="logo"
            alt="logo"
          />
        </div>
        <div className={`result-text ${breach.Title}`} onClick={this.toggleDescription}>
          <p className="Title">{breach.Title}</p>
          <p className="breach-date">Breach Date: {breach.BreachDate}</p>
          <div className="description hidden">{breach.Description}</div>
          <p className="data-classes">
            Compromised Data: <br /> {breach.DataClasses.join(', ')}
          </p>
        </div>
      </div>
    );
  }

};

Item.propTypes = {
  breach: PropTypes.object
};

export default Item;
