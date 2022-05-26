import React from 'react';
import './App.css';
import { Top } from './assets/components/Top';
import { Work } from './assets/components/Work';
import { Routes,Route } from "react-router-dom"
import { Skill } from './assets/components/Skill';
import { Profile } from './assets/components/Profile';
import { drawerWidth, ResponsiveDrawer } from './assets/components/ResponsiveDrawer';
import { Box } from '@mui/material';



function App() {
  return (
    <div className="App">
        <ResponsiveDrawer />
      <Box sx={{marginLeft: { xs: 0, sm: `${drawerWidth}px`}}}>
        <Routes>
          <Route path="/" element={<Top />}/>
          <Route path="work" element={<Work />}/>
          <Route path="skill" element={<Skill />}/>
          <Route path="profile" element={<Profile />}/>
        </Routes>
      </Box>
    </div>
  );
}

export default App;

