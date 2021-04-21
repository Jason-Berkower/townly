import TopTour from "./TopTour"
import "./CSS/gallerycontainer.css"
import { useState, useEffect } from "react";
import { getAllTours } from "../services/tours";
import Carousel from 'react-material-ui-carousel'


export default function GalleryContainer() {
  //map through all tours
  //if tour.popularity >= 8 then <tour pass props>
  
  const [tours, setTours] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async () => {
    const data = await getAllTours();
    // console.log(data)
    setTours(data);
  };

  // console.log(tours)
  
  let filteredTours = tours.filter((tour, index) => {
    return tour.popularity >= 8 
    })
  

  
  

  return (
    <div>
      <h2>Our Top Tours</h2>
      <div id="gallery">
        <div id="tourcontainer">
          <Carousel>
            {filteredTours.map((tour, index) => {
                return <TopTour key={index} tour={tour} />
            })
          }
        </Carousel>
        </div>
      </div>
    </div>
  )
}
