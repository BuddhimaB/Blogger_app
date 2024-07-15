import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login </h1>
      <form>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
        
        
          <input type='password' id='password' />
        
        <button type='submit'>Login</button>
      </form>
      
      
      </div>
  )
}

export default Login