import Layout from "../components/Layout"
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
        <h2>townly</h2>
        <GalleryContainer />
        <div id="buttons">
          Browse All Tours
          Want to Post a Tour?
          Create an Account
        </div>
      </Layout>
    </div>
    
  )
}
