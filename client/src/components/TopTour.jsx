import "./CSS/toptour.css"
import { Paper, Button } from '@material-ui/core'

export default function Tour(props) {
//props passed down of top tours info
  //print top tour - name image location 
  //have show details button that takes you to that tours details page that paco is setting up
let TopTour = props.tour

// if (tour.popularity <= "8") {
//   console.log(tour.tour_operator)
  // console.log(TopTour)
  
  return (
    <div className="uniquetour">
  
      <Paper className="paper">

        <img id="image" src={TopTour.imgURL} alt="Top Tour" />
        <div className = "info">
          <div id="details">

          {TopTour.name}
          {TopTour.tour_operator}
          {/* {TopTour.description} */}
          </div>
        <Button>Check it out!</Button>
        {/* <Link to=`/tours/${TopTour._id}` */}
        </div>
      </Paper>
    </div>
  )
}
