import React, {useEffect} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Snackbar from '@mui/material/Snackbar';



function ContactMe() {
  const [open, setOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false)
 
  const handleResize = () => {
    if (window.innerWidth < 1280) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  const handleClick = () => {
    navigator.clipboard.writeText('tomi.vahdersalo@gmail.com')
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => { 
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
    <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    message="Email Copied!"
  />
      <div className='textCenter'>
      {!isMobile?
        <ButtonGroup >
          <Button style={{fontSize: '0.8vw', width: '7vw', height:'2vw'}} href="https://github.com/Tolpanjuuri" variant="outlined" startIcon={<GitHubIcon style={{height: '2vw', width: '2vw'}}/>} >
            Github
          </Button>
          <Button style={{fontSize: '0.8vw',width: '7vw',height:'2vw'}} href="https://www.linkedin.com/in/tomi-vahdersalo-75900b26b/" variant="outlined" startIcon={<LinkedInIcon style={{height: '2vw', width: '2vw'}}/>} >
          LinkedIn
          </Button>
          <Button style={{fontSize: '0.6vw', width: '7vw',height:'2vw'}} onClick={handleClick}
          variant="outlined" startIcon={<EmailIcon style={{height: '2vw', width: '2vw'}}/>} >
            Copy Email
          </Button>
          </ButtonGroup>
      : 
      <div>
      <Button style={{fontSize: '1vw', width: '13vw',height:'3vw'}} href="https://github.com/Tolpanjuuri" variant="outlined" startIcon={<GitHubIcon style={{height: '2vw', width: '2vw'}}/>} >
            Github
          </Button>
                    <Button style={{fontSize: '1vw',width: '13vw',height:'3vw'}} href="https://www.linkedin.com/in/tomi-vahdersalo-75900b26b/" variant="outlined" startIcon={<LinkedInIcon style={{height: '2vw', width: '2vw'}}/>} >
                    LinkedIn
                    </Button>
                    <Button style={{fontSize: '0.7vw', width: '13vw',height:'4vw'}} onClick={handleClick}
                    variant="outlined" startIcon={<EmailIcon style={{height: '2vw', width: '2vw'}}/>} >
                      Copy Email
                    </Button>
                    </div>
          }
          
      </div>
    </>
  )
}

export default ContactMe
