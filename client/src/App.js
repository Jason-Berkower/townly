import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./screens/Home.jsx";
import TourList from "./screens/TourList";
import TourDetails from "./screens/TourDetails";
import CreateTour from "./screens/CreateTour";
import Auth from "./screens/Auth";
import EditTour from "./screens/EditTour";
import { verifyUser } from "./services/users";
import Layout from "./components/Layout";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [tourGuide, setTourGuide] = useState(null);

  let history = useHistory()
  
  const logout = async () => {
    await localStorage.clear();
    setCurrentUser(null);
    setTourGuide(null);
    history.push("/")
  };

  useEffect(() => {
    requestVerification();
  }, []);

  const requestVerification = async () => {
    const user = await verifyUser();
    if (user.is_tourGuide) {
      setTourGuide(user);
    } else {
      setCurrentUser(user);
    }
  };

  const renderEdit = () => {
    if (tourGuide) {
      return <EditTour />;
    };
  }
  return (
    <div className="App">
      <Switch>
        <Layout currentUser={currentUser} tourGuide={tourGuide} logout={logout}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tours/:id">
            <TourDetails tourGuide={tourGuide} />
          </Route>
          <Route exact path="/tours">
            <TourList />
          </Route>
          <Route exact path="/create-tour">
            <CreateTour tourGuide={tourGuide} />
          </Route>
          <Route exact path="/edit-tour/:id">
            {renderEdit()}
          </Route>
          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser} setTourGuide={setTourGuide} />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
