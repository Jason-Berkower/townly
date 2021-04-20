import "./App.css";
import { Route, Switch} from "react-router-dom"
import CreateTour from "./screens/CreateTour.jsx"

function App() {
  return (
    <div className="App">
    <Switch>

      <Route exact path="/create-tour">
        <CreateTour />
      </Route>

    </Switch>
    </div>
  )
}

export default App;
