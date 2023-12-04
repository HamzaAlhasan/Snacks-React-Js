import { SignedIn } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Protected() {
  return SignedIn ? <Outlet /> : <Navigate to='/'/>
}

export default Protected
