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
    time: "",
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
            <option value="8">8 am</option>
            <option value="9">9 am</option>
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