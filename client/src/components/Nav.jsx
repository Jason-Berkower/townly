import { Link } from "react-router-dom";
import "./CSS/nav.css";

export default function Nav(props) {
  const displayLinks = () => {
    if (props.currentUser) {
      return (
        <div>
          <button id="logout" onClick={props.logout}>sign out</button>
        </div>
      );
    } else if (props.tourGuide) {
      return (
        <div id = "tourguide">
          <Link to="/create-tour">post tour</Link>
          <button onClick={props.logout}>sign out</button>
        </div>
      );
    } else {
      return (
        <div id="account">
          <Link to="/auth">sign in / sign up</Link>
        </div>
      );
    }
  };
  return (
    <div id="nav">
      <div id="townly-head">
        <h1>townly...</h1>
        {/* //slogan go see? */}
      </div>
      <div id="links">
        <div id="everyoneslinks">
          <Link to="/">home</Link>
          <Link to="/tours">all tours</Link>
        </div>
        <div>{displayLinks()}</div>
      </div>
    </div>
  );
}
