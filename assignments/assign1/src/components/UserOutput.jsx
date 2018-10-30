import React from 'react'; 
import './UserOutput.css';

const userOutput =(props) => { 
  return ( 
    <div className='UserOutput'>
      <p>This is the life of pie. Mixed, baked, and sliced.</p>
      <p>Username: {props.username} </p>
    </div>
  )
}

export default userOutput;