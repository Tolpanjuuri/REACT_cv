import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import CancelIcon from '@mui/icons-material/Cancel';
import theme from './theme.ts';
import Grow from '@mui/material/Grow';

function Experience() {

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => { 
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className='box'
          sx={{
            height: "26.8em",
            width: "56em",
            '@media (max-width: 1250px)': {
            height: '50vw',
            width: '100%',
          },
          }}
        >
          <div className='title' style={{ alignItems: "center", display: "flex" }} >
            <WorkHistoryIcon style={{height: '4vmax', width: '4vmax', margin: '0.5vmax',}} />
            <h1>Work experience</h1>
          </div>
          {expanded !== 'panel2' ? 
          <Grow
          in={expanded !== 'panel2'}
          style={{ transformOrigin: '0 0 0' }}
          {...(expanded !== 'panel2' ? { timeout: 1000 } : {})}>
          <Accordion disableGutters expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            <AccordionSummary className='text' expandIcon={expanded !== 'panel1' ? <ExpandCircleDownIcon/> : <CancelIcon />}>
              <p>Heeros Oyj - 2023-2024 </p>
            </AccordionSummary>
            <AccordionDetails className='text'>
              <p>Tester/Fullstack Developer (Internship)</p>
              <p>
                Responsibilities include manual testing, automation testing, front-end and backend bug fixing, and collaborating with designers.
              </p>
            </AccordionDetails>
          </Accordion>
          </Grow>
          : <></>}
          {expanded !== 'panel1' ? 
          <Grow
          in={expanded !== 'panel1'}
          style={{ transformOrigin: '0 0 0' }}
          {...(expanded !== 'panel1' ? { timeout: 1000 } : {})}>
            <Accordion disableGutters expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary className='text' expandIcon={expanded !== 'panel2' ? <ExpandCircleDownIcon/> : <CancelIcon />}>
              <p>Exen Esports - 2022-2023</p>
            </AccordionSummary>
            <AccordionDetails className='text'>
              <p>Fullstack Developer (Internship)</p>
              <p>Responsibilities include manual testing, automation testing, front-end and backend bug fixing, and collaborating with designers.</p>
            </AccordionDetails>
          </Accordion>
          </Grow>
          : <></>} 
          {expanded === false ?
                    <Grow
                    in={expanded === false}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(expanded === false ? { timeout: 1000 } : {})}>
          <Accordion disableGutters disabled>
            <AccordionSummary className='text' expandIcon={<ExpandCircleDownIcon/>}>
              <p>Your company here? - 2024-Current</p>
            </AccordionSummary>
          </Accordion>
          </Grow>
          : <></>}
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Experience
