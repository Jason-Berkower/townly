import { useState, useEffect } from "react"
import { createTour } from "../services/tours"
import {useHistory} from "react-router-dom"

export default function CreateTour(props) {
  let [tour, setTour] = useState({
    name: "",
    tour_operator: `${props.currentUser}`,
    date: "",
    time: "",
    type: "",
    description: "",
    price: "",
    popularity: 0,
    imgURL: "",
  })

//handleChange
//handleSubmit
//selector for time, type, price
  //imgURL - radio button of 3-5 images per type to select from
  
  return (
    <div>
      <Layout>
        <h2>Post Your Tour</h2>
        <form onSubmit={handleSubmit}>
          <input id="name" placeholder="Tour Name" type="text" value={tour.name} onChange={handleChange} />

          <label htmlFor="date">Date: </label>
          <input id="date" type="date" value="tour.date" onChange={handleChange} />

          <input id="time" placeholder="Tour Time" type="text" value={tour.time} onChange={handleChange} />

          <input id="type" placeholder="Tour Type" type="text" value={tour.type} onChange={handleChange} />

          <input id="description" placeholder="description" type="text" value={tour.description} onChange={handleChange} />
          
          <input id="price" placeholder="Price" type="text" value={tour.price} onChange={handleChange} />
          
          <input id="image" placeholder="Image URL" type="text" value={tour.imgURL} onChange={handleChange} />

          <input type = "submit"/>

          

        </form>
      </Layout>
    </div>
  )
}
