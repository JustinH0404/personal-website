import './navBar.css'


export default function navBar(){
    return(
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
            <a href="#imageGallery" className = "headerText">Photo Gallery</a>  
          </li>
          
        </ul>
      </div>
    </div> 
    )
}