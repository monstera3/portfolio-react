import React from 'react';
import './App.css';
import { Top } from './assets/components/Top';
import { Work } from './assets/components/Work';
import { Routes,Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Top />}/>
        <Route path="work" element={<Work />}/>
      </Routes>
    </div>
  );
}

export default App;
