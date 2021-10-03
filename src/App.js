import './App.css';
import fb from "./assets/fb.png"
import insta from "./assets/insta.png"
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"
import aboutMe from "./assets/aboutMe.jpg"
import Project from './Project.js'
import Projects from './Projects/Projects.js'
import React from 'react'
import axios from 'axios'

function App() {
  const [Projects, setProjects] = React.useState(null);
  async function fetData(){
    const res = await axios.get(
      "https://api.airtable.com/v0/appKlfLPKeXS4jX0p/Project",
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      }
    )
    setProjects(res.data.records)
    console.log(res.data.records)
  }
  React.useEffect(() => {
    fetData();
  }, []);
  if(!Projects){
    return (
      <p> Loading </p>
    )
  }

  return (

    <div className="App">
    <div className = "navBar">
      <div>
        <ul className = "right">
          <li className = "headerText">
            <a href="#homePage" className = "headerText">Home</a>  
          </li>
          <li className = "headerText"> 
            <a href="#aboutPage" className = "headerText">About</a>
          </li>
          <li className = "headerText">
            <a href="#projectsPage" className = "headerText">Projects</a>
          </li>
          <li className = "headerText">
            <a href="#expPage" className = "headerText">Experiences</a>
          </li>
          <li className = "headerText">
            <a href="/" className = "headerText">Miscellaneous</a>  
          </li>
          
        </ul>
      </div>
    </div> 
    <section id = "homePage">
      <div class = "homePage">
        <p class = "homeName"> Justin Hong</p>
        <p class = "homeDesc"> Software Developer</p>
        <div class = "socials">
          <a href = "https://www.facebook.com/JustinH0404/" target = "_blank"><img class = "socials" src = {fb} alt = "fb"/></a>
          <a href = "https://www.instagram.com/justinhong0404/" target = "_blank"><img class = "socials" src = {insta} alt = "Insta"/></a>
          <a href = "http://www.linkedin.com/in/justinhong4" target="_blank"> <img class = "socials" src = {linkedin} alt = "tw"/></a>
          <a href = "https://github.com/JustinH0404" target = "_blank"><img class = "socials" src = {github} alt = "something"/></a>
        </div>
      </div>
    </section>
    <section id = "aboutPage">
      <div class = "aboutPage">
        <p class="titleText"> About me</p>
        <img class = "aboutPhoto" src = {aboutMe} alt = "me"/> 
        <div class = "aboutText2">
          <p class = "aboutText">HIHIHIIHHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHI</p>
        </div>
      </div>
    </section>
    {/* <About />
    <Projects /> */}
    <section id = "projectsPage">
      <div class = "projectsPage">
        <p class = "titleText">Projects</p>
        {
          Projects.map((record) => (
            <Project
            name = {record.fields.Name}
            image = {record.fields.Logo[0].url}
            descrip = {record.fields.description}
            >

            </Project>
          ))
        }
      </div>
    </section>
    <section id = "expPage">
      <div class = "expPage">
        <p class = "titleText expTitle">Experiences</p>
        <div class = "expBlock">
          <p class = "expTitle2">CodeBase!</p>
          <p class = "expDesc">CODEBASE DESCRIPTION BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH</p>
        </div>
        <div class = "expBlock">
          <p class = "expTitle2">CodeBase!</p>
          <p class = "expDesc">CODEBASE DESCRIPTION BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default App;
