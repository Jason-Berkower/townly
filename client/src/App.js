import "./App.css";
import { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./screens/Home.jsx";
import TourList from "./screens/TourList";
import TourDetails from "./screens/TourDetails";
import CreateTour from "./screens/CreateTour";
import Auth from "./screens/Auth"
import SignIn from "./screens/Auth"
import SignUp from "./screens/Auth"

function App() {
  

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tours/:id">
          <TourDetails />
        </Route>
        <Route exact path="/tours">
          <TourList />
        </Route>
        <Route exact path="/create-tour">
          <CreateTour />
        </Route>
        <Route exact path="/auth">
          <Auth/>
        </Route>
        {/* <Route exact path="/sign-in">
          <SignIn/>
        </Route>
        <Route exact path="/sign-up">
          <SignUp/>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
