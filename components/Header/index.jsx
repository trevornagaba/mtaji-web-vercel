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

const pages = [ "About", "Blog", "FAQs"];
const guest = ["Sign Up", "Sign In"];
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
        <AppBar
            position="fixed"
            style={{
                background: "white",
                boxShadow: "none",
                width: "100vw",
                padding: "0 10%"
            }}
            align="center"
        >
            {/* <Toolbar style={{ backgroundColor: "white" }}> */}
            <Grid
                item
                align="center"
            >
                <Grid
                    container
                    className={navStyles.navBar}
                    align="left"
                >
                    <Grid
                        item
                        sx={{
                            flexGrow: 1,
                        }}
                        justifyContent="left"
                    >
                        <Box
                            component="a"
                            href="/"
                            display="inline-flex"
                            alignItems="center"
                        >
                            <Image
                                src="/assets/logo.svg"
                                alt="logo"
                                width={37}
                                height={37}
                            />
                            <span className={navStyles.appName} style={{ color: "#5048E5" }}>mtaji</span>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            flexGrow: 3,
                        }}
                    >
                        {/* <Grid
                            item
                            xs={{
                                display: { sm: "none", md: "none", lg: "flex" },
                            }}
                            style={{
                                padding: "0px 10%",
                            }}
                        > */}
                            <Box
                                sx={{
                                    display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                                }}
                                style={{
                                    paddingTop: "10px",
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
                                        align="center"
                                        
                                    >
                                        <Typography
                                            noWrap
                                            component="a"
                                            href={page.toLowerCase()}
                                            style={{
                                                fontFamily: "'Poppins', sans-serif",
                                                fontSize: "16px",
                                                fontWeight: "400",
                                                color: "#09062D",
                                            }}
                                        >
                                            {page}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Box>
                        {/* </Grid> */}
                    </Grid>
                    <Grid
                        item
                        sx={{
                            flexGrow: 1,
                        }}
                        align="right"
                    >
                        <Box
                            sx={{
                                display: { xs: "none", sm: "none", lg: "flex" },
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
                                display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
                            }}
                            justifyContent="right"
                            style={{
                                paddingTop: "5px"
                            }}
                        >
                            <Stack spacing={2} direction="row">
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    style={{
                                        padding: "0",
                                    }}
                                >
                                    <MenuIcon style={{ fontSize: "30px" }}/>
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
                                        display: { md: "block", lg: "none" },
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
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {/* </Toolbar> */}
        </AppBar>
    );
};

export default Header;
