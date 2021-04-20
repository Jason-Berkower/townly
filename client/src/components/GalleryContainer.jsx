import TopTour from "./TopTour"
import { useState, useEffect } from "react";
import { getAllTours } from "../services/tours";

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

  return (
    <div>
      <h2>Our Top Tours</h2>
      <div id="gallery">
        <button>Back</button>
        <div id="tourcontainer">
          {tours.map((tour, index) => {
            return <TopTour key={index} tour={tour}/>
          })}
        </div>
        <button>Next</button>
      </div>
    </div>
  )
}
