import TopTour from "./TopTour"
import { useState, useEffect } from "react";
import { getAllTours } from "../services/tours";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'


export default function GalleryContainer() {
  //map through all tours
  //if tour.popularity =< 8 then <tour pass props>
  
  const [tours, setTours] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async () => {
    const data = await getAllTours();
    // console.log(data)
    setTours(data);
  };

  console.log(tours)

  
  // carousel

//   let items = [
//     {
//         name: "Random Name #1",
//         description: "Probably the most random thing you have ever seen!"
//     },
//     {
//         name: "Random Name #2",
//         description: "Hello World!"
//     }
// ]
  
  // return (
  //       <Carousel>
  //     {tours.map((tour, i) => {
  //       <TopTour key={i} item={tour} />
  //     })}
  //       </Carousel>
  //   )

  return (
    <div>
      <h2>Our Top Tours</h2>
      <div id="gallery">
        <button>Back</button>
        <div id="tourcontainer">
          {/* <Carousel> */}
          {tours.map((tour, index) => {
            if (tour.popularity >= 8) {
              return <TopTour key={index} tour={tour} />
              // console.log(tour)
            }
          })
        }
        {/* </Carousel> */}
        </div>
        <button>Next</button>
      </div>
    </div>
  )
}
