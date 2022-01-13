import './navBar.css'
import { Link } from 'react-router-dom';


export default function navBar(){
    return(
    <div className = "navBar">
      <div class = "row">
      <div className = "col-8">

      </div>
        <ul className = "right col-4">
          <li className = "headerText">
            <Link className = "headerText" to = "/"> Home</Link>
          </li>
          <li className = "headerText "> 
            <Link className = "headerText" to = "/aboutMe">About</Link>
          </li>
          <li className = "headerText "> 
            <Link className = "headerText" to = "/Projects">Projects</Link>
          </li>
          
        </ul>
      </div>
    </div> 
    )
}