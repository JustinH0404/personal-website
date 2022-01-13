import './App.css';
import NavBar from './navBar/navBar.js'
import HomePages from './homePage/homePage.js'
import Projects from './Projects/Projects.js'
import AboutPage from './aboutPages/aboutPages.js'
import Experiences from './experiencePage/experiencePage.js'
import ImageGallery from './imageGallery/imageGallery.js'
import TestPage from './TestPage/TestPage.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";


function App() {
  // useEffect(() =>{
  //   document.title = "Hello"
  // }, []);
  return (
    <div className="App">
    <Helmet>
      <title>Justin Hong</title>
      <meta name = "Justin Hong" content = "hello2"/>
      <link rel = "icon" type = "image/png" href = "src/favicon.ico" sizes = "16x16"/>
    </Helmet>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <TestPage/>
        <Experiences />
      </Route>
      <Route exact path="/aboutMe">
        <AboutPage />
        {/* <Projects />  */}
      </Route>
      <Route exact path="/projects">
        <Projects/>
      </Route>
    </Switch>
    </div>
  )
}

export default App;
