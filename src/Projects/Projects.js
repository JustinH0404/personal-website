import './Projects.css'
import Project from './Project.js'
import axios from 'axios'
import React from 'react'

export default function Projects() {
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
    <section id = "projectsPage">
      <div class = "projectsPage">
        <p class = "projectPageTitle fade-in">Projects</p>
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
    );
}