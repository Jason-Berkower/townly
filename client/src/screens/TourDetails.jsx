import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getTourById, deleteTour } from "../services/tours";
import "./CSS/tourdetails.css";

export default function TourDetails(props) {
  const { id } = useParams();
  const [tourDetails, setTourDetails] = useState({});
  let tourGuide = props.tourGuide && props.tourGuide.is_tourGuide;
  const history = useHistory();

  useEffect(() => {
    getTourDetails();
    deleteyBoy();
    //eslint-disable-next-line
  }, []);

  const getTourDetails = async () => {
    const data = await getTourById(id);
    setTourDetails(data);
  };
  // console.log(tourDetails);

  const deleteyBoy = () => {
    if (tourGuide) {
      const handleDelete = (event) => {
        deleteTour(id);
        history.push("/tours");
      };
      return (
        <button className="deleteyBoy" onClick={handleDelete}>
          Delete Tour
        </button>
      );
    }
    return null;
  };

  return (
    <div className="tourDetails">
      <h1 id="title">{tourDetails.name}</h1>
      <h3>{tourDetails.type} tour</h3>
      <h6>
        {tourDetails.city}, {tourDetails.country}
      </h6>
      <img
        className="tour-detail-img"
        src={tourDetails.imgURL}
        alt={`${tourDetails.type} tour`}
      />
      <h5>townly guide : {tourDetails.tour_operator}</h5>
      <p className="description">{tourDetails.description}</p>
      <p>
        date & time : {tourDetails.date} , {tourDetails.time}
      </p>
      <h5>${tourDetails.price}</h5>
      <h6>popularity : {tourDetails.popularity}</h6>
      

      {tourGuide && (
        <button className="deleteyBoy">
          
          <Link
            className="tourGuideLink"
            to={`/edit-tour/${tourDetails._id}`}
          >Edit Tour</Link>
        </button>
      )}
      <div>{deleteyBoy()}</div>
    </div>
  );
}
