import "./CSS/toptour.css"
import { Paper, Button } from '@material-ui/core'

export default function Tour(props) {
  //props passed down of top tours info
  //print top tour - name image location 
  //have show details button that takes you to that tours details page that paco is setting up
  let TopTour = props.tour

  return (
    <div className="uniquetour">

      <Paper className="paper">

        <img id="image" src={TopTour.imgURL} alt="Top Tour" />

        <div id="info">
          <div id="details">
            <h2>{TopTour.name}</h2>
            <p>{TopTour.tour_operator}</p>
            <p id="desc">{TopTour.description}</p>
          </div>

          <Button>Check it out!</Button>
          {/* <Link to=`/tours/${TopTour._id}` */}
        </div>
      </Paper>
    </div>
  )
}
