import React from 'react';
import './App.css';
import { Top } from './assets/components/Top';
import { Work } from './assets/components/Work';
import { Routes,Route } from "react-router-dom"
import { Skill } from './assets/components/Skill';
import { Profile } from './assets/components/Profile';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <AppStyle>
        <Routes>
          <Route path="/" element={<Top />}/>
          <Route path="work" element={<Work />}/>
          <Route path="skill" element={<Skill />}/>
          <Route path="profile" element={<Profile />}/>
        </Routes>
      </AppStyle>

    </div>
  );
}

export default App;

const AppStyle = styled.div`
  width:1200px;
  margin: 0 auto;
`;
