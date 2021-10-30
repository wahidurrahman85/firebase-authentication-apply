import "bootstrap/dist/css/bootstrap.min.css";
import { Placeholder } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./componats/Header/Header";
import Home from "./componats/Home/Home";
import Login from "./componats/Login/Login";
import PrivateRoute from "./componats/PrivateRoute/PrivateRoute";
import Register from "./componats/Register/Register";
import Shipping from "./componats/Shipping/Shipping";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <Placeholder></Placeholder>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
