import TopTour from "./TopTour"
import { useState, useEffect } from "react";
import { getAllTours } from "../services/tours";
import Carousel from 'react-material-ui-carousel'


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
  
  tours.map((tour, index) => {
    if (tour.popularity >= 8) {
      // console.log(tour)
        return <TopTour key={index} tour={tour} />
    } 
    })
  

  
  

  return (
    <div>
      <h2>Our Top Tours</h2>
      <div id="gallery">
        <div id="tourcontainer">
          <Carousel>
          {tours.map((tour, index) => {
            if (tour.popularity >= 8) {
                return <TopTour key={index} tour={tour} />
                // console.log(tour)
            } else {
              return null
              }
            })
          }
        </Carousel>
        </div>
      </div>
    </div>
  )
}
