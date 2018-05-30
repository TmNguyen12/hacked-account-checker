import React from 'react'
import Index from './Index'; 

const Display = props => {
  if (props.breaches[0].Title === 'No Breaches Found!') {
    return (
      <h1 className='no-breach-result'>
        No Breaches Found!
      </h1>
    )
  } else if (props.breaches){
    return <Index breaches={props.breaches}/>
  }

  return null; 
}

export default Display; 