import { SignUp } from '@clerk/clerk-react'
import React from 'react'

function Register() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <SignUp />
    </div>
  )
}

export default Register
