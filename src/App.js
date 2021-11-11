import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home/Home";
import AuthContext from "./context/AuthContext/AuthContext";
import Register from "./components/Pages/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DashBoardHome from "./components/Pages/DashBoard/DashboardHome/DashBoardHome";
import ProductsContext from "./context/ProductsContext/ProductsContext";
import Explore from "./components/Pages/Explore/Explore";
import PlaceOrder from "./components/Pages/PlaceOrders/PlaceOrder";

function App() {
  return (
    <AuthContext>
      <ProductsContext>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Register />
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoardHome />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </ProductsContext>
    </AuthContext>
  );
}

export default App;
