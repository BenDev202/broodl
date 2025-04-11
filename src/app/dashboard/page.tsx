import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Main from '@/components/Main'
import React from 'react'

export default function DashboardPage() {
  const isAuthentication = false

  let children = (
    <Login />
  )

  if(isAuthentication) {
    children = (
      <Dashboard />
    )
  }
  return (
    <Main>
      {children}
    </Main>
  )
}
