import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout(props) {
  return (
    <div>
      <Nav />
        <div>
          {props.children}
        </div>
      <Footer />
    </div>
  )
}
