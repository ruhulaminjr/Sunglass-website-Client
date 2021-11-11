import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../../StyledComponents/PrimaryButton/PrimaryButton";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const { user, LogOut } = useAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to="/">Home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/explore">Explore</NavLink>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {user ? (
          <PrimaryButton onClick={LogOut}>Logout</PrimaryButton>
        ) : (
          <NavLink to="/login">
            <PrimaryButton>Login</PrimaryButton>
          </NavLink>
        )}
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "none", boxShadow: "none", alignItems: "center" }}
      >
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { color: "#222" } }}
            >
              Eye Care
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <NavLink to="/" style={{ marginLeft: "17px" }}>
                Home
              </NavLink>
              <NavLink to="/explore" style={{ marginLeft: "25px" }}>
                Explore
              </NavLink>
              {user ? (
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  <PrimaryButton sx={{ mx: 2, ms: 2 }}>
                    <NavLink to="/dashboard" style={{ color: "#fff" }}>
                      DashBoard
                    </NavLink>
                  </PrimaryButton>
                  <Typography variant="body1" color="#222">
                    {user.displayName}
                  </Typography>
                  <PrimaryButton sx={{ mx: 3 }} onClick={LogOut}>
                    Logout
                  </PrimaryButton>
                </Box>
              ) : (
                <NavLink to="/login">
                  <PrimaryButton sx={{ mx: 3 }}>Login</PrimaryButton>
                </NavLink>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon sx={{ color: "#222" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default Navbar;
