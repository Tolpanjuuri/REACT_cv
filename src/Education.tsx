import { Box, ThemeProvider } from '@mui/material';
import theme from './theme.ts';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

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
                            <h2 className="title">Vocational School, Gradia</h2>
                            <p className='textCenter'>2021-2024</p>

                            <p className='textCenter'>Information and Communication Technologies (ICT), Software Developer</p>
                </Box>        
    )
}

export default Education

