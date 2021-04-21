import Layout from "../components/Layout"
// import "./CSS/home.css"
import GalleryContainer from "../components/GalleryContainer"
import { Link } from "react-router-dom"


export default function Home(props) {
//gallery of top selling tours
  //create gallery to sift through
  //import each slide with tour image and details
  //button to go to tour details
  //if tour popularity =< 8 populate here

  return (
    
    <div>
      <Layout user={props.user}>
        <GalleryContainer />
        <div id="buttons">
          <Link to="/tours">Browse All Tours</Link>
          <Link to="create-tour">Want to Post a Tour?</Link>
          {/* redirect to sign up if not signed in */}
          <Link to="/auth">Create an Account</Link>
        </div>
      </Layout>
    </div>
    
  )
}
