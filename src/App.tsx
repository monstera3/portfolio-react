import React from 'react';
import './App.css';
import { Top } from './assets/components/Top';
import { Work } from './assets/components/Work';
import { Routes,Route } from "react-router-dom"
import { Skill } from './assets/components/Skill';
import { Profile } from './assets/components/Profile';
import { ResponsiveDrawer } from './assets/components/ResponsiveDrawer';


function App() {
  return (
    <div className="App">
        <ResponsiveDrawer />
        <Routes>
          <Route path="/" element={<Top />}/>
          <Route path="work" element={<Work />}/>
          <Route path="skill" element={<Skill />}/>
          <Route path="profile" element={<Profile />}/>
        </Routes>
    </div>
  );
}

export default App;

