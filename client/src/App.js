import "./App.css";
import { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./screens/Home.jsx";
import TourList from "./screens/TourList";
import TourDetails from "./screens/TourDetails";
import CreateTour from "./screens/CreateTour";
import Auth from "./screens/Auth";
import SignIn from "./screens/Auth";
import SignUp from "./screens/Auth";
import { verifyUser } from "./services/users";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const logout = async () => {
    await localStorage.clear();
    setCurrentUser(null);
  };

  useEffect(() => {
    requestVerification();
  }, []);

  const requestVerification = async () => {
    const user = await verifyUser();
    setCurrentUser(user);
  };

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
          <Auth setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
