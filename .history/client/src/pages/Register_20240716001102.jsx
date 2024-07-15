import React from 'react'
import { Link } from 'react-router-dom'

const  = () => {
  return (
    <div className='auth'>
      <h1> </h1>
      <form>
          <input type='text' placeholder='username' id='username' />
          <input type='password' placeholder='password' />
          <button type='submit'></button>
          <p>This is an error!</p>
          <span> 
            Don't have an account? 
            <Link to='/register'>Register</Link>

          </span>
      </form>
      
      
      </div>
  )
}

export default 