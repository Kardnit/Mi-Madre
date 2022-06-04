import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../styles/Navbar.css'
import Cookies from 'universal-cookie';

const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
    <button onClick={() => {
      new Cookies().remove('jwt')
      logout()
    }}>
        Log Out
    </button>
    )
  )
}

export default LogoutButton