import {Link} from "react-router-dom"

export default function Nav(props) {
  const displayLinks = () => {
    if (props.currentUser) {
      return (
        <ul>
          <li>
            <button onClick={props.logout}>Sign Out</button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
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
