import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'
const PublicRoute = () => {

  const {auth} =useContext(UserContext)

    if (!auth) {
      return (
        <>
          <main >
            <Outlet/>
          </main>
        </>
      )
    }

}

export default PublicRoute