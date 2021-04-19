import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTourById } from "../auth/product";

export default function TourDetails(props) {
  const { id } = useParams();
  const [tourDetails, setTourDetails] = useState({});

  useEffect(() => {
    getTourDetails();
  }, []);

  const getTourDetails = async () => {
    const data = await getTourById(id);
    setTourDetails(data);
  };

  return (
    <div>
      <h2>{tourDetails.name}</h2>
      <h3>{tourDetails.type}</h3>
      <img src={tourDetails.imgURL} alt="" />
      {/* string interpolation for accessibility? */}
      <h5>{tourDetails.tour_operator}</h5>
      <p>{tourDetails.description}</p>
      <p>
        {tourDetails.date},{tourDetails.time}
      </p>
      <h5>{tourDetails.price}</h5>
      <h6>{tourDetails.popularity}</h6>
      {props.currentUser && (
        //have to check current user is same as user who created tour
        <Link to={`/edit-tour/${tourDetails._id}`}>Edit Tour</Link>
      )}
    </div>
  );
}
