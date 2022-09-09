import React, { useEffect, useState, useContext } from "react";
import {
    Stack,
    IconButton,
    Menu,
    MenuItem 
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import { AppContext } from "../AppContext"

const UserCard = () => {

  const { handleLogout } = useContext(AppContext);

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      {/* <Badge color="secondary" badgeContent={0}>
        <CircleNotificationsIcon style={{ fontSize: "40px" }} />
      </Badge> */}
        <Badge color="secondary" badgeContent={0}>
        
        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                style={{ padding: "0" }}
                color="inherit"
              >
                <AccountCircleIcon style={{ fontSize: "35px", color: "#09062D" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                    component="a"
                    href="/about"
                >About</MenuItem>
                <MenuItem component="a" href="/account">Account</MenuItem>
                <MenuItem onClick={handleLogout} >Logout</MenuItem>
              </Menu>

        </Badge>
    </Stack>
  );
}

export default UserCard;
