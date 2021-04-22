import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout(props) {
  return (
   <div id="page-container">
   <div id="content-wrap">
      <Nav currentUser={props.currentUser} tourGuide={props.tourGuide} logout={props.logout}/>
        <div>
          {props.children}
        </div>
      <Footer id = "footer"/>
    </div>
  </div>
  )
}
