import { SignIn, SignUp } from '@clerk/clerk-react'
import React from 'react'


function Login() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
       <SignIn />
    </div>
  )
}

export default Login
