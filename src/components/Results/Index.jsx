import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Index = ({breaches}) => {

  if (breaches[0] === 'none') return null;
  return (
    <div className="results-index">
      {breaches.map((breach, idx) => (
        <Item key={breach.Name} breach={breach} />
      ))}
    </div>
  );
};

Index.propTypes = {
  breaches: PropTypes.array
};

export default Index;
