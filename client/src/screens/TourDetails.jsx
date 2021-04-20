import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTourById } from "../services/tours";

export default function TourDetails(props) {
  const { id } = useParams();
  const [tourDetails, setTourDetails] = useState({});
  useEffect(() => {
    getTourDetails();
  }, []);

  const getTourDetails = async () => {
    const data = await getTourById( id );
    setTourDetails(data);
  };
  console.log(props);

  return (
    <div>
      <Layout user={props.user}>

      <h1>{tourDetails.name}</h1>
      <h3>{tourDetails.type}</h3>
      <img src={tourDetails.imgURL} alt={`${tourDetails.type} tour`} />
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
        //create edit link
        )}
        </Layout>
    </div>
  );
}
