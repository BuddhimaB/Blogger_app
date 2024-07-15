import React from 'react'
import { Link } from 'react-router-dom'

const Re = () => {
  return (
    <div className='auth'>
      <h1>Re </h1>
      <form>
          <input type='text' placeholder='username' id='username' />
          <input type='password' placeholder='password' />
          <button type='submit'>Re</button>
          <p>This is an error!</p>
          <span> 
            Don't have an account? 
            <Link to='/register'>Register</Link>

          </span>
      </form>
      
      
      </div>
  )
}

export default Re