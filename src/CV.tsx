import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React from 'react';


function CV() {
    const handleDownload = () => {
        fetch('/public/CV2024IN_E.pdf')
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.download = "Tomi_Vahdersalo_CV.pdf"; 

            document.body.appendChild(link);
    
            link.click();
    
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("Error fetching the file:", error);
          });
      };
    return (
        <>
                <Box className='box'
                    sx={{
                        width: "30em",
                        height: '37em',
                        '@media (max-width: 1250px)': {
                            height: '120vw',
                            maxHeight: '32em',
                            width: '100%',
                            
                          },
                    }}
                >
                <div style={{textAlign:"center"}}>
                <div className='title' style={{ alignItems: "center", display: "flex" }}>
                  <AttachFileIcon style={{height: '4vmax', width: '4vmax', margin: '0.5vmax',}}/>
                  <h1 >CV</h1>
                </div>
                <div style={{ textAlign:"center"}}>
                <img src="./assets/CVimage.png" width="240rem"/>
                </div>
                <Button onClick={handleDownload}style={{width: '17em', maxWidth:'50vw', height: '5em', marginTop:'auto' }} variant="contained"><p className='textCenter'>Download CV</p></Button>
                </div>
                </Box>
        </>
    )
}

export default CV

