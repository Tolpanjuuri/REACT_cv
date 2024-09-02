import { Box, ThemeProvider } from '@mui/material';
import theme from './theme.ts';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import Grid from '@mui/material/Grid';



function Education() {
    return (
        
                <Box className='box'
                    sx={{
                        height: "22em",
                        width: "75em",
                        '@media (max-width: 1250px)': {
                            height: '35vw',
                            width: '100%',
                          },
                    }}
                >
                    <div className="title" style={{ alignItems: "center", display: "flex" }}>
                        <SchoolIcon style={{height: '4vmax', width: '4vmax', margin: '0.5vmax',}}/>
                        <h1>Education</h1>
                    </div>
                    <Grid  container spacing={2}>
                        <Grid item xs={6}>
                        <h2 className="title">Vocational School, Gradia</h2>
                            <p className='textCenter'>2021 - 2024</p>

                            <p className='textCenter'>Information and Communication Technologies (ICT), Software Developer</p>
                            
                        </Grid>
                        <Grid item xs={6}>
                        <h2 className="title">Jamk University of Applied Sciences</h2>
                            <p className='textCenter'>2024 - Current</p>

                            <p className='textCenter'>Information and Communication Technologies (ICT), Bachelors</p>
                            
                        </Grid>
                    </Grid>

                </Box>        
    )
}

export default Education

