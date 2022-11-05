import React from 'react'
import { Stack } from '@mui/material'
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'



const Header = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screen, setScreen] = useState(null)

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);


  useEffect(() => {

    if (screen < 900) {
      setActiveMenu(false)
    }
    else {
      setActiveMenu(true)
    }




  }, [screen])

  return (



    <Stack className='header' sx={{ position: 'sticky', zIndex: 999, top: 0 }} direction={'row'} p={2} justifyContent={'space-between'} alignItems={'center'} >
      <Logo />
      <button className='hambug' onClick={() => setActiveMenu(!activeMenu)}>
        {
          activeMenu ? (<svg focusable="false" className="hambug2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>

          ) : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" className="hamburgert"><g fill="black" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"><path d="M1,1H19"></path><path d="M1,9H19"></path><path d="M1,17H19"></path></g></svg>

        }
      </button>
      {activeMenu && (

        <Stack direction={{ xs: 'row', md: 'row' }} gap={2} className='menu'>

          <Link className='link' to={'/'}>Home</Link>
          <Link className='link' to={'/cryptocurency'}>cryptocurency</Link>
          <Link className='link' to={'/news'}>Top Feeds </Link>
        </Stack>


      )}

    </Stack>




  )
}

export default Header