import './App.css';
import NavBar from './navBar/navBar.js'
import HomePages from './homePage/homePage.js'
import Projects from './Projects/Projects.js'
import AboutPage from './aboutPages/aboutPages.js'
import Experiences from './experiencePage/experiencePage.js'
import ImageGallery from './imageGallery/imageGallery.js'
import React from 'react'

function App() {
  return (
    <div className="App">
    <NavBar />
    <HomePages /> 
    <AboutPage />
    <Projects /> 
    <Experiences />
    <ImageGallery />
    </div>
  )
}

export default App;
