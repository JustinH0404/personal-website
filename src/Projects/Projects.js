import './Projects.css'
import Project from './Project.js'
import axios from 'axios'
import React from 'react'
import AOS from 'aos';
import proj1 from './p6d2.png'


export default function Projects() {
  AOS.init({
    duration:1000
});
// const [Projects, setProjects] = React.useState(null);
//   async function fetData(){
//     const res = await axios.get(
//       "https://api.airtable.com/v0/appKlfLPKeXS4jX0p/Project",
//       {
//         headers: {
//           authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
//         }
//       }
//     )
//     setProjects(res.data.records)
//     console.log(res.data.records)
//   }
//   React.useEffect(() => {
//     fetData();
//   }, []);
//   if(!Projects){
//     return (
//       <p> Loading </p>
//     )
//   }
    return (
    <section id = "projectsPage">
      <div class = "projectsPage">
        <p class = "projectPageTitle" data-aos = "fade-down">Projects</p>
        <div class = "container projectm projectBorder">
          <div class = "row">
            <div class = "col-4" data-aos = "fade-right">
              <img class = "projectPicture" src = {proj1} alt = ""/>
            </div>
            <div class = "col-8" data-aos = "fade-left">
              <div class = "projectTitle">p5 Project</div>
              <div class = "projectAuthors">Justin Hong</div>
              <div class = "projectDescription">This was my very first project coding project! Drawing on inspiration from 
              the Ridge Rubik's Cube Club, which I was a part of in High School, I decided to create a project that created
              a step by step process on solving a Rubik's Cube. To do this, I learned how to use JavaScript, a little bit of React,
              and the p5 library.</div>
            </div>
          </div>
        </div>
        {/* {
          Projects.map((record) => (
            <Project
            name = {record.fields.Name}
            image = {record.fields.Logo[0].url}
            descrip = {record.fields.description}
            >

            </Project>
          ))
        } */}
      </div>
    </section>
    );
}