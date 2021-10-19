import './App.css';
import NavBar from './navBar/navBar.js'
import HomePages from './homePage/homePage.js'
import Projects from './Projects/Projects.js'
import AboutPage from './aboutPages/aboutPages.js'
import Experiences from './experiencePage/experiencePage.js'
import ImageGallery from './imageGallery/imageGallery.js'
import React from 'react'
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/">
        <HomePages /> 
        <Projects /> 
      </Route>
      <Route exact path="/aboutMe">
        <AboutPage />
        <Experiences />
        {/* <ImageGallery /> */}
      </Route>
    </Switch>
    {/* <HomePages /> 
    <Projects /> 
    <AboutPage />
    <Experiences />
    <ImageGallery /> */}
    </div>
  )
}

export default App;
