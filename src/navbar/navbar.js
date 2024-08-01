import { Link } from "react-router-dom";
import Menu from "../screen/menu";

const Navbar=()=>{
return(
    <>
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link to={"/"} style={{margin:100,textDecoration:"none"}}>MainScreen</Link>
        </li>
        <li className="nav-item">
          <Link to={"/Menu"} style={{margin:100,textDecoration:"none"}}>Menu</Link>
        </li>
        <li className="nav-item">
          <Link to={"/Location"}style={{margin:100,textDecoration:"none"}}>Location</Link>
        </li>
        <li className="nav-item">
         <Link to={"/Register"} style={{margin:100,textDecoration:"none"}}>Register</Link>
        </li>
        <li className="nav-item">
         <Link to={"/Recipies"} style={{margin:100,textDecoration:"none"}}>Recipies</Link>
        </li>
      </ul>
    </div>
  </nav>
  {/* Black background with white text
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">...</nav>
   Blue background with white text 
  <nav className="navbar navbar-expand-sm bg-primary navbar-dark">...</nav> */}
</>
)
}
export default Navbar;