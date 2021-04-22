import TopTour from "./TopTour"
import "./CSS/gallerycontainer.css"
import { useState, useEffect } from "react";
import { getAllTours } from "../services/tours";
import Carousel from 'react-material-ui-carousel'


export default function GalleryContainer() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async () => {
    const data = await getAllTours();
    setTours(data);
  };


  let filteredTours = tours.filter((tour, index) => {
    return tour.popularity >= 8
  })

  return (
    <div>
      <h2 id="headline">Our Top Tours</h2>
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
