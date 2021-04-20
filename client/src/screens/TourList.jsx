import { useState, useEffect } from "react";
import { getAllTours } from "../services/tours";
import { Link } from "react-router-dom";
import Layout from "../components/Layout"


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

      <h3>Our Tours</h3>
      {tours.map((tour) => {
        return (
          <div>
            <h5>{tour.name}</h5> <img src={tour.imgURL} alt="" />
              <div>
                <Link to={`/tours/${tour._id}`}>Show Details</Link>
              </div>
            </div>
          
        );
      })}
      </Layout>
    </div>
  );
}
