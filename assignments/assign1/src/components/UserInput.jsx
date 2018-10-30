import React from 'react'; 

const userInput = (props) => { 
  return ( 
    <div>
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
