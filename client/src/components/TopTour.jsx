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
    <div id="unique Tour">
  
      <Paper>
        <img id="image" src={TopTour.imgURL} alt="Top Tour" />
        <br/>
        {TopTour.name}
        <Button>Check it out!</Button>
        {/* <Link to=`/tours/${TopTour._id}` */}
      </Paper>
    </div>
  )
}
