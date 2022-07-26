import * as React from "react";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import navStyles from "./Header.module.css";

import Logo from "../Logo/Logo";

const pages = ["Explore", "Learn", "FAQs"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
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
        <AppBar position="fixed" className={navStyles.navBar} style={{ background: "white" }}>
            <Toolbar style={{ backgroundColor: "white" }}>
                <Grid container>
                    <Grid
                        item
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            display="inline-flex"
                            alignItems="center"
                        >
                            <Image
                                src="/assets/logo.svg"
                                alt="logo"
                                width={37}
                                height={37}
                            />
                            <span className={navStyles.appName}>mtaji</span>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            flexGrow: 3,
                            display: { sm: "none", md: "none", lg: "flex" },
                        }}
                    >
                        <Grid
                            container
                            style={{
                                padding: "0px 10%",
                            }}
                        >
                            {pages.map((page) => (
                                <Grid
                                    key={page}
                                    item
                                    xs={6}
                                    sm={6}
                                    md={4}
                                    lg={4}
                                    xl={4}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography
                                        noWrap
                                        component="a"
                                        href="/"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "18px",
                                            fontWeight: "400",
                                            color: "#09062D",
                                        }}
                                    >
                                        {page}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: { md: "none", lg: "flex" },
                            }}
                            justifyContent="right"
                        >
                            <Stack spacing={2} direction="row">
                                <Button
                                    component="a"
                                    href="/login"
                                    variant="text"
                                    style={{
                                        color: "#09062D",
                                        textTransform: "none",
                                        fontSize: "16px",
                                    }}
                                >
                                    Sign in
                                </Button>
                                <Button
                                    component="a"
                                    href="/signup"
                                    variant="contained"
                                    style={{
                                        backgroundColor: "#2518B8",
                                        color: "white",
                                        textTransform: "none",
                                        fontSize: "16px",
                                    }}
                                >
                                    Sign up
                                </Button>
                            </Stack>
                        </Box>
                        <Box
                            sx={{
                                display: { md: "flex", lg: "none" },
                            }}
                            justifyContent="right"
                        >
                            <IconButton
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
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography
                                            textAlign="center"
                                            style={{
                                                color: "#888",
                                                fontFamily:
                                                    "'Quicksand', sans-serif",
                                            }}
                                        >
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
