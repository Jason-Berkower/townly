import { Link } from "react-router-dom"

export default function Footer() {

  return (
    <div>
      <div id="projectLink">

      <Link to="https://github.com/Jason-Berkower/townly">Checkout the Project!</Link>
      </div>
      <div id="devLinks">
        
        <h4>Check Out the Developers Works!</h4>
        <a href="https://github.com/amandaphail">Amanda</a>
        {/* <Link to="https://github.com/amandaphail">Amanda</Link> */}
        <a href="https://github.com/Jason-Berkower">Jason</a>
        {/* <Link to="https://github.com/Jason-Berkower">Jason</Link> */}
        <a href ="https://github.com/PecoDory">Paco</a>
      {/* <Link to="https://github.com/PecoDory">Paco</Link> */}
      </div>
    </div>
  )
}
