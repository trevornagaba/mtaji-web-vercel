import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
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
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { AppContext } from "../AppContext";

import SignUpIcon from "@mui/icons-material/Add";
import SignInIcon from "@mui/icons-material/ExitToApp";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AboutIcon from "@mui/icons-material/InfoOutlined";
import BlogIcon from "@mui/icons-material/ChatOutlined";
import FaqsIcon from "@mui/icons-material/HelpCenterOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import navStyles from "./Header.module.css";
import styles from "../landing/Landing.module.css";

import Logo from "../Logo/Logo";
import UserCard from "./UserCard";

const pages = ["About", "Blog", "FAQs"];
const authPages = ["Home", "Blog", "FAQs"];
const guest = [
    {
        pageIcon: <SignUpIcon />,
        pageName: "Sign Up",
        pageLink: "/signup",
    },
    {
        pageIcon: <SignInIcon />,
        pageName: "Sign In",
        pageLink: "/login",
    },
    {
        pageIcon: <AboutIcon />,
        pageName: "About",
        pageLink: "/about",
    },
    {
        pageIcon: <BlogIcon />,
        pageName: "Blog",
        pageLink: "/blog",
    },
    {
        pageIcon: <FaqsIcon />,
        pageName: "FAQs",
        pageLink: "/faqs",
    },
];
const loggedIn = [
    {
        pageIcon: <AccountCircleIcon />,
        pageName: "Account",
        pageLink: "/account",
    },
    {
        pageIcon: <AutoAwesomeMosaicIcon />,
        pageName: "Portfolio",
        pageLink: "/home",
    },
    {
        pageIcon: <AboutIcon />,
        pageName: "About",
        pageLink: "/about",
    },
    {
        pageIcon: <BlogIcon />,
        pageName: "Blog",
        pageLink: "/blog",
    },
    {
        pageIcon: <FaqsIcon />,
        pageName: "FAQs",
        pageLink: "/faqs",
    },
    {
        pageIcon: <LogoutIcon />,
        pageName: "Logout",
        pageLink: "/logout",
    },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const menuPopupStyles = (theme) => ({
    popoverPaper: {
        width: "100vw",
        height: "100vh",
        maxHeight: "unset",
        top: "8% !important",
        left: "0% !important",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "21px",
        boxShadow: "none",
    },
});

const Header = (props) => {
    const { isLoaded, isAuth, checkAuth, handleLogout } =
        useContext(AppContext);
    const { isGreyBackgound } = props;

    const router = useRouter();
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

    const navLink = isAuth ? authPages : pages;

    const mobileLinks = (link) => {
       if (link.pageName == "Logout"){
                
                return (
                    <Typography
                        textAlign="center"
                        style={{
                            color: "#000000",
                            fontFamily: "'Quicksand', sans-serif",
                        }}
                        onClick={handleLogout}
                    >
                        <span style={{ marginRight: "5px", color: "#01bbc8" }}>
                            {link.pageIcon}
                        </span>
                        <span
                            style={{
                                color:
                                    router.pathname === `/${link.pageLink}`
                                        ? "#01bbc8"
                                        : "#000000",
                            }}
                        >
                            {link.pageName}
                        </span>
                    </Typography>
                )}else{
                    
                    return (
                        <Typography
                            component="a"
                            href={link.pageLink}
                            textAlign="center"
                            style={{
                                color: "#000000",
                                fontFamily: "'Quicksand', sans-serif",
                            }}
                        >
                            <span style={{ marginRight: "5px", color: "#01bbc8" }}>
                                {link.pageIcon}
                            </span>
                            <span
                                style={{
                                    color:
                                        router.pathname === `/${link.pageLink}`
                                            ? "#01bbc8"
                                            : "#000000",
                                }}
                            >
                                {link.pageName}
                            </span>
                        </Typography>
                    );
                }
        }
    return (
        <AppBar
            position="fixed"
            style={{
                background: isGreyBackgound ? "#F7F7F7" : "white",
                boxShadow: "none",
                width: "100vw",
                padding: "0 10%",
            }}
            align="center"
        >
            {/* <Toolbar style={{ backgroundColor: "white" }}> */}
            <Grid item align="center">
                <Grid
                    container
                    className={navStyles.navBar}
                    style={{
                        background: isGreyBackgound ? "#F7F7F7" : "white",
                    }}
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
                            {/* <Image
                                src="/assets/logo.svg"
                                alt="logo"
                                width={37}
                                height={37}
                            /> */}
                            <span
                                className={navStyles.appName}
                                style={{ color: "#5048E5" }}
                            >
                                mtaji
                            </span>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            flexGrow: 3,
                        }}
                    >
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "none",
                                    lg: "flex",
                                },
                            }}
                            style={{
                                paddingTop: "10px",
                            }}
                        >
                            {navLink?.map((page) => (
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
                                        // component="a"
                                        // href={page.toLowerCase()}
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            color: "#09062D",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            router.push(
                                                `/${page.toLowerCase()}`
                                            );
                                        }}
                                    >
                                        {page === "Home" ? "Portfolio" : page}
                                    </Typography>
                                    {router.pathname ===
                                    `/${page.toLowerCase()}` ? (
                                        <div className={styles.underline3} />
                                    ) : (
                                        ""
                                    )}
                                </Grid>
                            ))}
                        </Box>
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
                            {isLoaded ? (
                                <Stack spacing={2} direction="row">
                                    {isAuth ? (
                                        <UserCard />
                                    ) : (
                                        <>
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
                                        </>
                                    )}
                                </Stack>
                            ) : (
                                <Button
                                    disabled
                                    variant="contained"
                                    style={{
                                        color: "#09062D",
                                        textTransform: "none",
                                        fontSize: "16px",
                                    }}
                                >
                                    Loading...
                                </Button>
                            )}
                        </Box>
                        <Box
                            sx={{
                                display: {
                                    xs: "flex",
                                    sm: "flex",
                                    md: "flex",
                                    lg: "none",
                                },
                            }}
                            justifyContent="right"
                            style={{
                                paddingTop: "5px",
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
                                    {anchorElNav ? (
                                        <CloseIcon
                                            style={{ fontSize: "30px" }}
                                        />
                                    ) : (
                                        <MenuIcon
                                            style={{ fontSize: "30px" }}
                                        />
                                    )}
                                </IconButton>
                                <Menu
                                    PopoverClasses={{
                                        paper: props.classes.popoverPaper,
                                    }}
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
                                    style={{
                                        width: "90vh",
                                    }}
                                >
                                    {isAuth
                                        ? loggedIn.map((page) => (
                                              <MenuItem
                                                  key={page.pageName}
                                                  onClick={handleCloseNavMenu}
                                              >
                                                  {mobileLinks(page)}
                                              </MenuItem>
                                          ))
                                        : guest.map((page) => (
                                              <MenuItem
                                                  key={page.pageName}
                                                  onClick={handleCloseNavMenu}
                                              >
                                                  <Typography
                                                      component="a"
                                                      href={page.pageLink}
                                                      textAlign="center"
                                                      style={{
                                                          color: "#000000",
                                                          fontFamily:
                                                              "'Quicksand', sans-serif",
                                                      }}
                                                  >
                                                      <span
                                                          style={{
                                                              marginRight:
                                                                  "5px",
                                                              color: "#01bbc8",
                                                          }}
                                                      >
                                                          {page.pageIcon}
                                                      </span>
                                                      <span
                                                          style={{
                                                              color:
                                                                  router.pathname ===
                                                                  `/${page.pageLink}`
                                                                      ? "#01bbc8"
                                                                      : "#000000",
                                                          }}
                                                      >
                                                          {page.pageName}
                                                      </span>
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

export default withStyles(menuPopupStyles)(Header);
