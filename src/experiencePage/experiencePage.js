import './experiencePage.css'
import axios from 'axios'
import React from 'react'
import Experience from './experiences.js'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

        <p class = "expTitle">Experiences</p>
        <VerticalTimeline
        lineColor = {'#7851a9'}>
        {
          Experiences.map((record) => (
            <Experience
            name = {record.fields.Name}
            time = {record.fields.time}
            descrip = {record.fields.description}
            role = {record.fields.role}
            location = {record.fields.location}
            logo = {record.fields.logo[0].url}
            >
            </Experience>
          ))
        }
        <VerticalTimelineElement
          iconStyle={{ background: '#7851a9', color: '#fff' }}
        />
      </VerticalTimeline>
        <div class = "smallMargin">
        </div>
      </div>
        
    </section>
    )
}