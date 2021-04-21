import { useState, useEffect } from "react";
import { updateTour, getTourById } from "../services/tours";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function EditTour(props) {
  const { id } = useParams();
  const history = useHistory();
  let [tour, setTour] = useState({
    name: "",
    // tour_operator: `${props.currentUser}`,
    tour_operator: "Created Tour Guide",
    //populate with username - params
    date: "",
    time: "8",
    type: "adventure",
    description: "",
    price: "",
    popularity: 0,
    imgURL: "",
    street: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    getTourDetails();
  }, []);

  function handleChange(event) {
    let { id, value } = event.target;
    setTour((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  async function handleSubmit(event) {
    console.log(tour);
    event.preventDefault();
    await updateTour(tour);
    history.push("/tours");
  }

  const getTourDetails = async () => {
    const data = await getTourById(id);
    console.log(data);
    setTour(data);
  };

  //imgURL - radio button of 3-5 images per type to select from
  console.log(tour);
  return (
    <div>
      <Layout user={props.user}>
        <h2>Edit Your Tour</h2>
        <form id="tourform" onSubmit={handleSubmit}>
          <input
            id="name"
            placeholder="Tour Name"
            type="text"
            value={tour.name}
            onChange={handleChange}
          />

          <label htmlFor="date">Date: </label>
          <input
            id="date"
            type="date"
            value={tour.date}
            onChange={handleChange}
          />

          {/* <input id="time" placeholder="Tour Time" type="text" value={tour.time} onChange={handleChange} /> */}

          <label htmlFor="time">Tour Time: </label>
          <select
            id="time"
            form="tourform"
            value={tour.time}
            onChange={handleChange}
          >
            <option value="0">12 am</option>
            <option value="1">1 am</option>
            <option value="2">2 am</option>
            <option value="3">3 am</option>
            <option value="4">4 am</option>
            <option value="5">5 am</option>
            <option value="6">6 am</option>
            <option value="7">7 am</option>
            <option value="8">8 am</option>
            <option value="9">9 am</option>
            <option value="10">10 am</option>
            <option value="11">11 am</option>
            <option value="12">12 pm</option>
            <option value="13">1 pm</option>
            <option value="14">2 pm</option>
            <option value="15">3 pm</option>
            <option value="16">4 pm</option>
            <option value="17">5 pm</option>
            <option value="18">6 pm</option>
            <option value="19">7 pm</option>
            <option value="20">8 pm</option>
            <option value="21">9 pm</option>
            <option value="22">10 pm</option>
            <option value="23">11 pm</option>
          </select>

          {/* <input id="type" placeholder="Tour Type" type="text" value={tour.type} onChange={handleChange} /> */}
          <label htmlFor="type">Tour Type: </label>
          <select
            id="type"
            form="tourform"
            value={tour.type}
            onChange={handleChange}
          >
            <option value="adventure">Adventure</option>
            <option value="walking">Walking</option>
            <option value="ghost">Ghost</option>
            <option value="museum">Museum</option>
            <option value="cooking">Cooking</option>
            <option value="active">Active</option>
            <option value="sightseeing">Site Seeing</option>
            <option value="show">Show</option>
            <option value="animal">Animals</option>
            <option value="historical">Historical</option>
            <option value="tasting">Tasting</option>
            <option value="personal">Personalized</option>
          </select>

          <input
            id="description"
            placeholder="Description"
            type="text"
            value={tour.description}
            onChange={handleChange}
          />

          <label htmlFor="price">$</label>
          <input
            id="price"
            placeholder="Price"
            type="Number"
            value={tour.price}
            onChange={handleChange}
          />
          {/* <label htmlFor="price">$ </label>
          <select id="price" form="tourform" value={tour.price} onChange={handleChange}>
          <option value="5">5</option>
          </select> */}

          <input
            id="imgURL"
            placeholder="Image URL"
            type="text"
            value={tour.imgURL}
            onChange={handleChange}
          />

          <input
            id="street"
            placeholder="Street"
            type="text"
            value={tour.street}
            onChange={handleChange}
          />

          <input
            id="city"
            placeholder="City"
            type="text"
            value={tour.city}
            onChange={handleChange}
          />

          <input
            id="country"
            placeholder="Country"
            type="text"
            value={tour.country}
            onChange={handleChange}
          />

          <input type="submit" />
        </form>
      </Layout>
    </div>
  );
}
