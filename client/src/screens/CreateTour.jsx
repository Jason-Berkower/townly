import { useState } from "react"
import { createTour} from "../services/tours"
import { useHistory } from "react-router-dom"
import Layout from "../components/Layout"

export default function CreateTour(props) {
  const history = useHistory()
  let [tour, setTour] = useState({
    name: "",
    // tour_operator: `${props.currentUser}`,
    tour_operator: "Created Tour Guide",
    date: "",
    time: "8",
    type: "",
    description: "",
    price: "",
    popularity: 0,
    imgURL: "",
  })

  
  function handleChange(event) {
    let { id, value } = event.target
    setTour((prevState) => ({
      ...prevState, [id]: value
    }))
    console.log(tour.time)
  }


  async function handleSubmit(event) {
    console.log(tour)
    event.preventDefault()
    await createTour(tour)
    history.push("/tours")
  }
  
//selector for time, type, price
  //imgURL - radio button of 3-5 images per type to select from
  
  return (
    <div>
      <Layout user={props.user}>
        <h2>Post Your Tour</h2>
        <form id="tourform" onSubmit={handleSubmit}>
          <input id="name" placeholder="Tour Name" type="text" value={tour.name} onChange={handleChange} />

          <label htmlFor="date">Date: </label>
          <input id="date" type="date" value={tour.date} onChange={handleChange} />

          {/* <input id="time" placeholder="Tour Time" type="text" value={tour.time} onChange={handleChange} /> */}

          <label htmlFor="time">Tour Time: </label>
          <select id="time" form="tourform" value={tour.time} onChange={handleChange}>
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

          <input id="type" placeholder="Tour Type" type="text" value={tour.type} onChange={handleChange} />

          <input id="description" placeholder="description" type="text" value={tour.description} onChange={handleChange} />
          
          <input id="price" placeholder="Price" type="Number" value={tour.price} onChange={handleChange} />
          
          <input id="imgURL" placeholder="Image URL" type="text" value={tour.imgURL} onChange={handleChange} />

          <input type = "submit"/>

          

        </form>
      </Layout>
    </div>
  )
}

//understanding using select tag in react
//https://reactjs.org/docs/forms.html