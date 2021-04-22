import "./CSS/toptour.css"
import { Paper, Button } from '@material-ui/core'
import { Link } from "react-router-dom"

export default function Tour(props) {
  let TopTour = props.tour

  return (
    <div className="uniquetour">

      <Paper className="paper">

        <img id="image" src={TopTour.imgURL} alt="Top Tour" />

        <div id ="tourtext">
        <div id="info">
          <div id="details">
            <h2 id="toptourname">{TopTour.name}</h2>
            <p id="toptourguide">{TopTour.tour_operator}</p>
            <p id="topdesc">{TopTour.description}</p>
          </div>

            <Button id="button"><Link to={`/tours/${TopTour._id}`}>Check it out!</Link></Button>
        </div>
        </div>
      </Paper>
    </div>
  )

}
