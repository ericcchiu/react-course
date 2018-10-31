import React from 'react'

const validationComponent = (props) => {
  let result = 'Unable to determine the text length';

  if (props.length >= 5) { 
    result = 'Text long enough';
  } else { 
    result = 'Text too short';
  }

  return (
    <div>
      <p>This is the text length from App: {result}</p>
    </div>
  )
}

export default validationComponent
