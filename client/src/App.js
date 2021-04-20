import "./App.css";
import { useState } from "react";
import TourDetails from "./screens/TourDetails";
import CreateTour from "./screens/CreateTour.jsx"
import Nav from "./components/Nav.jsx"
import Home from "./screens/Home.jsx"
import {Route, Link, Switch} from "react-router-dom"


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = async () => {
    await localStorage.clear();
    setCurrentUser(null);
  };





  return <div className="App">
    {/* <Nav currentUser={currentUser} logout={logout} /> */}
   <Switch> 
    <Route exact path="/">
    <Home />
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
