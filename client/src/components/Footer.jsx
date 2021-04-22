import { Link } from "react-router-dom"
import "./CSS/footer.css"

export default function Footer() {

  return (
    <div id="footer">
      <div id="projectlink">
        <Link className = "link" to="https://github.com/Jason-Berkower/townly">Checkout the Project!</Link>
      </div>
      <div id="devlinks">
        
        <h5>Developers</h5>
        <div id ="individuals">

          <a className = "link" href="https://github.com/amandaphail">Amanda</a>
          <a className = "link" href="https://github.com/Jason-Berkower">Jason</a>
          <a className = "link" href ="https://github.com/PecoDory">Paco</a>
     
        </div>
      </div>
    </div>
  )
}
