import { useState, useEffect } from "react";
import { getAllTours } from "../services/tours";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async () => {
    const data = await getAllTours();
    setProducts(data);
  };

  return (
    <div>
      <h3>Our Tours</h3>
      {tours.map((tour) => {
        return (
          <div>
            <h5>{tour.name}</h5> <img src={tour.imgURL} alt="" />
            <div>
              <Link to={`/tour/${tour._id}`}>Show Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

