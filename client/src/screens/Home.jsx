
import "./CSS/home.css"
import GalleryContainer from "../components/GalleryContainer"
import { Link } from "react-router-dom"


export default function Home(props) {

  return (

    <div id="home">
      <GalleryContainer />
      <div id="linkslinks">
        <Link className="homelinks" to="/tours">Browse All Tours</Link>
        <Link className="homelinks" to="/auth">Create an Account</Link>
      </div>
    </div>

  )
}
