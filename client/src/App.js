import "./App.css";
import TourDetails from "./screens/TourDetails";
import {Route, Link} from "react-router-dom"




function App() {
  return <div className="App">
    <Route exact path="/">
    <div>home</div>
    </Route>
    <Route exact path="/tours/:id">
    <TourDetails />
    </Route>
    
  </div>;
}

export default App;
