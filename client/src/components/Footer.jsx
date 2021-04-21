import { Link } from "react-router-dom"
import "./CSS/footer.css"

export default function Footer() {

  return (
    <div id="footer">
      <div id="projectlink">
        <Link class = "link" to="https://github.com/Jason-Berkower/townly">Checkout the Project!</Link>
      </div>
      <div id="devlinks">
        
        <h5>Developers</h5>
        <div id ="individuals">

          <a class = "link" href="https://github.com/amandaphail">Amanda</a>
          {/* <Link to="https://github.com/amandaphail">Amanda</Link> */}
          <a class = "link" href="https://github.com/Jason-Berkower">Jason</a>
          {/* <Link to="https://github.com/Jason-Berkower">Jason</Link> */}
          <a class = "link" href ="https://github.com/PecoDory">Paco</a>
      {/* <Link to="https://github.com/PecoDory">Paco</Link> */}
        </div>
      </div>
    </div>
  )
}
