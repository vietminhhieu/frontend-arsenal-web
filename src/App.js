import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import router from "./Router/route";
import routerName from "./Router/RouterName";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {router.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
                name={route.name}
              ></Route>
            );
          })}
          <Redirect to={routerName.HOME} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
