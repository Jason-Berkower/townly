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
        history.push('/tours')
      };
      return <button onClick={handleDelete}>Delete Tour</button>;
    }
    return null;
  };

  return (
    <div>
      <h1>{tourDetails.name}</h1>
      <h3>{tourDetails.type}</h3>
      <h6>
        {tourDetails.city}, {tourDetails.country}
      </h6>
      <img className="tour-detail-img" src={tourDetails.imgURL} alt={`${tourDetails.type} tour`} />
      <h5>townly guide : {tourDetails.tour_operator}</h5>
      <p>{tourDetails.description}</p>
      <p>
        date & time : {tourDetails.date} , {tourDetails.time}
      </p>
      <h5>${tourDetails.price}</h5>
      <h6>popularity : {tourDetails.popularity}</h6>
      {/* not sure if we should do popularity in detail, as it would create bias in booking. maybe just use for homepage in the background? */}

      {tourGuide && (
        <button>
          <Link className="tourGuideLink" to={`/edit-tour/${tourDetails._id}`}>
            Edit Tour
          </Link>
        </button>
      )}
      <div>{deleteyBoy()}</div>
    </div>
  );
}
