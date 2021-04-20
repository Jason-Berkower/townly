import { Link } from "react-router-dom"
import "./CSS/nav.css"

export default function Nav(props) {
  const displayLinks = () => {
    if (props.currentUser) {
      return (
        <div>
            <button onClick={props.logout}>Sign Out</button>
        </div>
      );
    } else {
      return (
        <div id="account">
            <Link to="/auth">Sign In</Link>
            <Link to="/auth">Sign Up</Link>
        </div>
          
      );
    }
  };
  return (
    <div id="nav">
      <h1>Townly</h1>
      <div id="links">
        <div id="everyoneslinks">
          <Link to="/">Home</Link>
          <Link to="/tours">All Tours</Link>
          <Link to="/create-tour">
            Post Tour
          </Link>
        </div>
        <div>
          {displayLinks()}
        </div>
    </div>
      
    </div>
  )
}
