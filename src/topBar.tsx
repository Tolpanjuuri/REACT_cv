import Avatar from '@mui/material/Avatar';
import ContactMe from './ContactMe.tsx'
import './topBar.css'
import React from 'react';

function TopBar() {
  return (
    <>
    <div>
      <div className='selfieDiv'>
      <Avatar sx={{ width: '100%', height: '80%',maxWidth: '20em',}} src="./assets/image.png" variant='rounded' className='selfie'/>

        <h1 className='name'>Tomi Vahdersalo </h1>
        <h2 className='developer'>Software developer</h2>
        <ContactMe/>
        </div>


    </div>
    </>
  )
}

export default TopBar
