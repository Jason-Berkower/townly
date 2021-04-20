import {Link} from "react-router-dom"

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
        <div>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
        </div>
          
      );
    }
  };
  return (
    <div id="nav">
      <h1>Townly</h1>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/tours">All Tours</Link>
        <Link to="/create-tour">
          Post Tour
        </Link>
        {/* <Link to="/sign-up">Sign Up</Link>
        <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-out">Sign Out</Link> */}
        {displayLinks()}
    </div>
      
    </div>
  )
}
