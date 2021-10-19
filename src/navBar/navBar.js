import './navBar.css'
import { Link } from 'react-router-dom';


export default function navBar(){
    return(
    <div className = "navBar">
      <div>
        <ul className = "right">
          <li className = "headerText">
            <Link className = "headerText" to = "personal-website"> Home</Link>
            {/* <a href="#homePage" className = "headerText" to>Home</a>   */}
          </li>
          <li className = "headerText"> 
            {/* <a href="#aboutPage" className = "headerText">About</a> */}
            <Link className = "headerText" to = "/aboutMe">About</Link>
          </li>
          {/* <li className = "headerText">
            <a href="#projectsPage" className = "headerText">Projects</a>
          </li> */}
          {/* <li className = "headerText">
            <a href="#expPage" className = "headerText">Experiences</a>
          </li>
          <li className = "headerText">
            <a href="#imageGallery" className = "headerText">Photos</a>  
          </li> */}
          
        </ul>
      </div>
    </div> 
    )
}