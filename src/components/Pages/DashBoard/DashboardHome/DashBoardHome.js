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

const drawerWidth = 240;

function DashBoardHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
      <Button variant="outlined" sx={{ my: 1 }}>
        <CreditCardIcon sx={{ mx: 1 }} />
        <NavLink to="/">Pay</NavLink>
      </Button>
      <Button variant="outlined" sx={{ my: 1 }}>
        <ReviewsIcon sx={{ mx: 1 }} />
        <NavLink to="/">Review</NavLink>
      </Button>
      <Button variant="outlined" sx={{ my: 1 }}>
        <ShoppingCartIcon sx={{ mx: 1 }} />
        <NavLink to="/">My Orders</NavLink>
      </Button>

      <Button variant="outlined" sx={{ my: 1 }}>
        <ExitToAppIcon sx={{ mx: 1 }} />
        LogOut
      </Button>
      {/* admin route  */}
      <Button variant="outlined" sx={{ my: 1 }}>
        <CreditCardIcon sx={{ mx: 1 }} />
        <NavLink to={`${url}/makeadmin`}>Make Admin</NavLink>
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
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
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin />
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
