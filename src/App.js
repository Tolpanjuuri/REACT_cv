import React from 'react'
import ReactDOM from 'react-dom/client'
import TopBar from './topBar.tsx'
import './index.css'
import AboutMe from './AboutMe.tsx'
import Experience from './Experience.tsx';
import Education from './Education.tsx'
import Skills from './Skills.tsx'
import Languages from './Languages.tsx'
import CV from './CV.tsx'
import Container from '@mui/material/Container';

function App() {
  return (
    <React.StrictMode>
    <div className='test2'>
      <Container maxWidth="sm">
        <TopBar />
      </Container>
    </div>
    this is a test

    <div className='marginLeft'>
      <div className='test'>
        <div className='topDiv'>
          <AboutMe />
          <CV />
        </div>
        <div className='topDiv'>
          <Experience />
          <Skills />
        </div>
        <div className='topDiv'>
          <Education />
          <Languages />
        </div>
      </div>
    </div>
  </React.StrictMode >
  );
}

export default App;
