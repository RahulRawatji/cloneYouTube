import React from 'react'

import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

  return (
    <div className='flex w-9/10'>
        {isMenuOpen && <Sidebar/>}
        <Outlet/>
    </div>
  )
}

export default MainContainer