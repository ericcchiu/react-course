import React from 'react';
import './UserInput.css'; 

const userInput = (props) => { 
  return ( 
    <div className='UserInput'>
      <p>Please enter your username: </p>
      <input 
        type='text'
        onChange={props.changeInput}
        value={props.currentUser}
      />
      
    </div>
  )
}

export default userInput; 
