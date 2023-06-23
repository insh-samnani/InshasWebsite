import './App.css';
import React, {useState} from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import Certificates from './components/Certificates';
import Work from './components/Work';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Interests from './components/Interests';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [progress, setProgress] = useState(0)

  return (
    <>
    <Router>
    <Navbar title="IS" h1="About" h2="Certifications" h3="WorkExperience" h4="Awards" h5="Projects" h6="Interests"/>
    <LoadingBar height={3} color = '#f11946' progress = {progress} />
    <Routes>
      <Route exact path='/' element={<About setProgress = {setProgress} key="11" />} />
      <Route exact path='/Certifications' element={<Certificates setProgress = {setProgress} key="22" />} />
      <Route exact path='/WorkExperience' element={<Work setProgress = {setProgress} key="33"/>} />
      <Route exact path='/Awards' element={<Awards key="44" />} />
      <Route exact path='/Projects' element={<Projects setProgress = {setProgress} key="55" />} />
      <Route exact path='/Interests' element={<Interests setProgress = {setProgress} key="66" />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
