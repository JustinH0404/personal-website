import './experiencePage.css'
import axios from 'axios'
import React from 'react'
import Experience from './experiences.js'

export default function Experiences(){
  const [Experiences, setExperiences] = React.useState(null);
  async function fetData(){
    const res = await axios.get(
      "https://api.airtable.com/v0/appXcyoZJo7HOgdsU/Table%201",
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      }
    )
    setExperiences(res.data.records)
    console.log(res.data.records)
  }
  React.useEffect(() => {
    fetData();
  }, []);
  if(!Experiences){
    return (
      <p> Loading </p>
    )
  }
    return(
    <section id = "expPage">
      <div class = "expPage">
        <p class = "titleText expTitle">Experiences</p>
        {
          Experiences.map((record) => (
            <Experience
            name = {record.fields.Name}
            time = {record.fields.time}
            descrip = {record.fields.description}
            role = {record.fields.role}
            >
            </Experience>
          ))
        }
      </div>
    </section>
    )
}