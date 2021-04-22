import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout(props) {
  return (
    <div>
      <Nav currentUser={props.currentUser} tourGuide={props.tourGuide} logout={props.logout}/>
        <div>
          {props.children}
        </div>
      <Footer />
    </div>
  )
}
