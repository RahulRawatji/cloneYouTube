import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

  return (
    <div className='flex w-9/10'>
        {isMenuOpen && <Sidebar/>}
        <Body/>
    </div>
  )
}

export default MainContainer