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
          <p>Hello, im a student from Jamk University of Applied Sciences. I already have done studies in this field from Gradia and got some great work experiences from all the on the job learnings there.</p>
          <p> I'm a social guy and love to be with friends. On my free time i love to mess around with stuff, like computers, mopeds and everything intresting i can get my hands on. I also have cats.</p>
          <p> I would love to get into working life as soon as possible, because i feel like learning on the job is easier. I also like working life a lot more then school. I know it's a trend with us young people. And no it's not all about the money.</p>
          <p> In coding i've started to like doing frontend a lot more. The desing side is not my strong point, as you maybe see. Maybe because it's the thing i have more experience in. Backend i might have to get a bit more used to but it's the thing i've heard about in school more.</p>
          <p> If you're looking for a dedicated employee, please don't hesitate to get in touch!</p>
        </div>

      </Box>
    </>
  )
}

export default AboutMe
