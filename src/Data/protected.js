
import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Protected() {
  const {isSignedIn} = useAuth()
  return isSignedIn ? <Outlet /> : <Navigate to='/'/>
}

export default Protected
