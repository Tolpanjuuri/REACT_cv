import {Box} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';

function AboutMe() {
  return (
    <>
      <Box className='box'
        sx={{
          height: '37em',
          width: "100em",
          '@media (max-width: 1250px)': {
            height: '70vw',
            width: '100%',
          },
        }}
      >
        <div style={{ alignItems: "center", display: "flex" }} >
          <InfoIcon style={{height: '4vmax', width: '4vmax', margin: '0.5vmax',}} />
          <div className='title'>
            <h1 >About Me</h1>
          </div>
        </div>  
        <div className='text'>
          <p>Hello, I'm a just graduated software developet from Gradia. I'm apart of the first year of software developers graduating from vocational school, and I want to prove that a bachelors degree is not a barrier to having strong skills. My studies have come to an end, and my next goal is employment.</p>
          <p> I've enjoyed software development since elementary school, where I started taking coding courses simply for fun. This interest stayed through middle school and continued into vocational school, where it became clear to me that this is the field of expertise I want to pursue and what I enjoy. With three years of vocational education behind me and some courses done from the Jamk University of Applied Sciences, securing a job at this state of my career would be a dream.</p>
          <p> If you're looking for a dedicated employee, please don't hesitate to get in touch!</p>
        </div>

      </Box>
    </>
  )
}

export default AboutMe
