import { Box, ThemeProvider } from '@mui/material';
import theme from './theme.ts';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BuildIcon from '@mui/icons-material/Build';
import React from 'react';


function Skills() {
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
                        height: "26.8em",
                        width: "64em",
                        '@media (max-width: 1250px)': {
                            height: '20em',
                            width: '100%',
                          },
                    }}
                >
                    <div className='title' style={{ alignItems: "center", display: "flex" }} >
                    <BuildIcon style={{height: '4vmax', width: '4vmax', margin: '0.5vmax',}}/>
                    <h1>Skills</h1>
                    </div>
                    <div style={{margin: '3em', marginTop: '0',}}>
                    <Grid  container spacing={2}>
                        <Grid item xs={8}>
                            <Item style={{fontSize: '1vmax'}}>JavaScript</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item style={{fontSize: '1vmax'}}>Php</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item style={{fontSize: '1vmax'}}>Css, Html</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item style={{fontSize: '1vmax'}}>Databases</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item style={{fontSize: '1vmax'}}>Python</Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item style={{fontSize: '1vmax'}}>C#</Item>
                        </Grid>
                        <Grid item xs={5}>
                            <Item style={{fontSize: '1vmax'}}>React</Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item style={{fontSize: '1vmax'}}>Linux</Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item style={{fontSize: '1vmax'}}>SQL</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item style={{fontSize: '1vmax'}}>TypeScript</Item>
                        </Grid>
                    </Grid>
                    </div>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default Skills

