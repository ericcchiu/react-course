import React from 'react'; 

const userOutput =(props) => { 
  return ( 
    <div>
      <p>This is the life of pie. Mixed, baked, and sliced.</p>
      <p>What's in a name?</p>
      <p>Username: {props.username} </p>
    </div>
  )
}

export default userOutput;