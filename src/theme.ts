// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#ffffff',
    },
  },
  
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
      },},
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          color: '#ffffff', 
          '&.Mui-expanded': {
            marginBottom: 0,
          }
        },
      },
      defaultProps: {
        elevation: 3,
      },
    },
    
  },
  
  
});

export default theme;
