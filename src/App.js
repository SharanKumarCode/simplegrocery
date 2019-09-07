import React from 'react';
import './App.css';
import { NavBar } from './Components/NavBar/Navbar';
import { TopBar } from './Components/TopBar/Topbar';
import { BodyComp } from './Components/BodyComp/BodyComp';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <NavBar/>
      <BodyComp/>
    </div>
  );
}

export default App;
