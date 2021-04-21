import { useState, useEffect } from "react";
import { getAllTours } from "../services/tours";
import { Link } from "react-router-dom";
import Layout from "../components/Layout"
import "./CSS/tourlist.css"

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
    <div>
      <Layout user={props.user}>

      <h2>townly tours</h2>
      {tours.map((tour) => {
        return (
          <div>
            <h5>{tour.name}</h5> 
            <img src={tour.imgURL} alt="" />
              <div className="tour-edit">
                <Link to={`/tours/${tour._id}`}>show details</Link>
              </div>            
          </div>
        );
      })}
      </Layout>
    </div>
  );
}
