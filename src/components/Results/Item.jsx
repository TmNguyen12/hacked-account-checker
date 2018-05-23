import React from 'react'
import PropTypes from 'prop-types'

const Item = ({breach}) => {
  console.log('item breach',breach); 
  console.log('data-classes',breach.DataClasses);
  return (
    <div className='result-item'>
      <img src={`//logo.clearbit.com/${breach.Domain}`} className='logo' alt='logo' />
      <div className='result-text'>
        <p className="Title">{breach.Title}</p>
        <p className="breach-date">Breach Date: {breach.BreachDate}</p>
        <div className='description'>{breach.Description}</div>
        <p className='data-classes'>Compromised Data: </p>
      </div>
    </div>
  )
}

Item.propTypes = {
  breach: PropTypes.object 
}

export default Item; 
