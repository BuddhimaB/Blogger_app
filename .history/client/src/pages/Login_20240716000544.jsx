import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login </h1>
      <form>
          <input type='text' placeholder='username' id='username' />
          <input type='password' placeholder='password' />
          <button type='submit'>Login</button>
          <span> 
            Don't have an account? 
            <Link>Register</b>

          </span>
      </form>
      
      
      </div>
  )
}

export default Login