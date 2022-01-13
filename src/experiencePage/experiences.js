import React from 'react'
import './experiencePage.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

export default function Experience(props){
    const name = props.name
    const descrip = props.descrip
    const time = props.time
    const role = props.role
    const location = props.location
    const logo = props.logo
    return (

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={time}
          iconStyle={{ background: '#7851a9', color: '#fff' }}
          icon={<img class = "thumbnail2" src  = {logo}/>}
        >
          <h3 className="vertical-timeline-element-title">{name}</h3>
          <h4 className="vertical-timeline-element-subtitle">{location}</h4>
          <h5 className = "vertical-timeline-element-subtitle">{role}</h5>
          <p>
            {descrip}
          </p>
        </VerticalTimelineElement>
    )
}