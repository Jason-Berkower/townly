import "./App.css";
import TourDetails from "./screens/TourDetails";
import {Route, Link, Switch} from "react-router-dom"
import CreateTour from "./screens/CreateTour.jsx"



function App() {
  return <div className="App">
   <Switch> 
    <Route exact path="/">
    <div>home</div>
    </Route>
    <Route exact path="/tours/:id">
    <TourDetails />
    </Route>
    <Route exact path="/create-tour">
    <CreateTour />
    </Route>
   </Switch> 
  </div>;
}

export default App;
