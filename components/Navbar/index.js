import * as React from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Logo from '../Logo/Logo';

const pages = ['Explore', 'Learn', 'FAQs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" style={{ background: 'white', boxShadow: 'none', color: '#5048E5' }}>
      <Grid
        item
        style={{
          padding: '35px 15%'
        }}      
      >
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            Id={'Logo'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <Image
              src={logo}
              alt="Company Logo"
            />
          </Typography> */}
          <Logo/>

          <Box sx={{ flexGrow: 1, display: { sm: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: '#888', fontFamily: "'Quicksand', sans-serif" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',              
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { sm: 'none', lg: 'flex' } }}>
            <Grid
              container
              style={{
                padding: '0px 20%'
              }}
            >
              {pages.map((page) => (
                <Grid
                  key={page}
                  item
                  xs={6}
                  sm={6}
                  md={3}
                  lg={3}
                  xl={3}
                  align={'center'}
                >
                  <Typography
                    noWrap
                    component="a"
                    href="/"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '18px',
                      fontWeight: '400',
                      color: "#09062D",
                    }}
                  >
                    {page}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip> */}
                {/* <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  onClick={handleOpenUserMenu}
                  style={{
                    fontFamily: "'Quicksand', sans-serif",                    
                    cursor: 'pointer'
                  }}
                >
                  <AccountCircleIcon style={{ fontSize: '35px', marginBottom: '-8px', }}/>
                </Typography> */}
            {/* </Tooltip> */}
            <Stack spacing={2} direction="row">
              <Button
                component="a"
                href="/login"
                variant="text" 
                style={{ color: "#09062D", textTransform: 'none', fontSize: "16px" }}
              >Sign in</Button>
              <Button
                component="a"
                href="/signup"
                variant="contained"
                style={{ backgroundColor: "#2518B8", color: "white", textTransform: "none", fontSize: "16px" }}
              >Sign up</Button>
            </Stack>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
