import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { UserContext } from '../context/UserContext'
const Dashboard = () => {

  const {auth} =useContext(UserContext)

  if (auth) {
    return (
      <>
      <div className="min-h-screen">
        <Sidebar />
        <Navbar />
        <main className="pl-[390px] pt-[89px] bg-[#F3EFCC] h-full z-30">
          <Outlet/>
        </main>
      
      </div>
      </>
    )
  }

}

export default Dashboard