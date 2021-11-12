import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReviewsIcon from "@mui/icons-material/Reviews";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import AdminRoute from "../../../PrivateRoute/AdminRoute";
import AddaProducts from "../Admin/AddAProducts/AddaProducts";
import useAuth from "../../../../hooks/useAuth";
import ManageProducts from "../Admin/ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import MyReview from "../MyReview/MyReview";
import Pay from "../Pay/Pay";
import MangeAllOrders from "../Admin/Manage All Orders/MangeAllOrders";

const drawerWidth = 240;

function DashBoardHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, user, LogOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { url, path } = useRouteMatch();
  const drawer = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 3,
        marginTop: "50px",
      }}
    >
      {admin && (
        <>
          <Button variant="outlined" sx={{ my: 1 }}>
            <CreditCardIcon sx={{ mx: 1 }} />
            <NavLink to={`${url}/makeadmin`}>Make Admin</NavLink>
          </Button>
          <Button variant="outlined" sx={{ my: 1 }}>
            <CreditCardIcon sx={{ mx: 1 }} />
            <NavLink to={`${url}/addproducts`}>Add Products</NavLink>
          </Button>
          <Button variant="outlined" sx={{ my: 1 }}>
            <CreditCardIcon sx={{ mx: 1 }} />
            <NavLink to={`${url}/manageorders`}>Manage Orders</NavLink>
          </Button>
          <Button variant="outlined" sx={{ my: 1 }}>
            <CreditCardIcon sx={{ mx: 1 }} />
            <NavLink to={`${url}/manageproducts`}>Manage Products</NavLink>
          </Button>
          <Button variant="outlined" sx={{ my: 1 }} onClick={LogOut}>
            <ExitToAppIcon sx={{ mx: 1 }} />
            LogOut
          </Button>
        </>
      )}
      {!admin && user && (
        <>
          <Button variant="outlined" sx={{ my: 1 }}>
            <CreditCardIcon sx={{ mx: 1 }} />
            <NavLink to={`${url}/payments`}>Pay</NavLink>
          </Button>
          <Button variant="outlined" sx={{ my: 1 }}>
            <ReviewsIcon sx={{ mx: 1 }} />
            <NavLink to={`${url}/myreview`}>Review</NavLink>
          </Button>
          <Button variant="outlined" sx={{ my: 1 }}>
            <ShoppingCartIcon sx={{ mx: 1 }} />
            <NavLink to={`${url}/myorders`}>My Orders</NavLink>
          </Button>
          <Button variant="outlined" sx={{ my: 1 }} onClick={LogOut}>
            <ExitToAppIcon sx={{ mx: 1 }} />
            LogOut
          </Button>
        </>
      )}

      {/* admin route  */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: { lg: "flex", md: "flex" } }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ ml: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Switch>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/addproducts`}>
            <AddaProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manageorders`}>
            <MangeAllOrders />
          </AdminRoute>
          <Route path={`${path}/payments`}>
            <Pay />
          </Route>
          <Route path={`${path}/myorders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/myreview`}>
            <MyReview />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoardHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoardHome;
