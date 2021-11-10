import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home/Home";
import AuthContext from "./context/AuthContext/AuthContext";
import Register from "./components/Pages/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DashBoardHome from "./components/Pages/DashBoard/DashboardHome/DashBoardHome";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoardHome/>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
