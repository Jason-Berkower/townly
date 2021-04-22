import { useState, useEffect } from "react";
import { getAllTours } from "../services/tours";
import { Link } from "react-router-dom";
import "./CSS/tourlist.css";

export default function ProductList(props) {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async () => {
    const data = await getAllTours();
    setTours(data);
  };

  return (
    <div className="tourList">

      <h1 className="listHeader">townly tours</h1>
      {tours.map((tour, index) => {
        return (
          <div key={index}>
            <h2 className="tourTitle">{tour.name}</h2>
            <h4>{tour.type} tour</h4>
            <h5>
              {tour.city}, {tour.country}
            </h5>
            <img className="tourListImg" src={tour.imgURL} alt="" />
            <div className="showDetailsWrap">
              <Link id="showDetails" to={`/tours/${tour._id}`}>show details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
