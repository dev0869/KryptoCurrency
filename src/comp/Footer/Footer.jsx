import React from 'react'
import { Stack } from '@mui/material'
import Logo from '../logo/logo'
const Footer = () => {
  return (
    <Stack sx={{ backgroundColor: '#191934' }} pt={2} justifyContent={'center'} alignItems={'center'} >
      <Logo />
      <p style={{color:'white'}}><span>&#169;</span> Copyright reserved by Devesh Bisht</p>
    </Stack>
  )
}

export default Footer