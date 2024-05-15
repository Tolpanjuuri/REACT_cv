import { Box, ThemeProvider } from '@mui/material';
import theme from './theme.ts';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import React from 'react';

function Languages() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box className='box'
                    sx={{
                        width: "45em",
                        height: "22em",
                        '@media (max-width: 1250px)': {
                            height: '45vw',
                            width: '100%',
                            maxHeight: '20em',
                          },
                    }}
                >
                    <div className="title" style={{ alignItems: "center", display: "flex" }} >
                        <LanguageIcon style={{height: '4vmax', width: '4vmax', margin: '0.5vmax',}}/>
                        <h1>Languages</h1>
                    </div>
                    <div>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={8}>
                                <Item>
                                    <div style={{ display: "flex", alignItems: "center" }} className='text'>
                                        <div>Finnish</div>
                                        <Divider style={{ margin: '0 1em', backgroundColor: '#242424' }} orientation="vertical" variant="fullWidth" flexItem />
                                        <div style={{ flex: 1, }}>Mothers Tongue</div>
                                    </div>
                                </Item>


                            </Grid>
                            <Grid item xs={8}>
                                <Item>
                                    <div style={{ display: "flex", alignItems: "center" }} className='text'>
                                        <div>English</div>
                                        <Divider style={{ margin: '0 1em', backgroundColor: '#242424' }} orientation="vertical" variant="fullWidth" flexItem />
                                        <div style={{ flex: 1,  }}>B2</div>
                                    </div>
                                </Item>


                            </Grid>
                            <Grid item xs={8}>
                            <Item>
                                    <div style={{ display: "flex", alignItems: "center" }} className='text'>
                                        <div>Swedish</div>
                                        <Divider style={{ margin: '0 1em', backgroundColor: '#242424' }} orientation="vertical" variant="fullWidth" flexItem />
                                        <div style={{ flex: 1,  }}>Basics</div>
                                    </div>
                                </Item>


                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default Languages

