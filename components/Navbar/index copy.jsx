// import * as React from "react";
// import Image from "next/image";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Grid from "@mui/material/Grid";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import navStyles from "./Navbar.module.css";

// import Logo from "../Logo/Logo";

// const pages = ["Explore", "Learn", "FAQs"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const Navbar = () => {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     return (
//         <AppBar position="fixed" className={navStyles.navBar}>
//             <Toolbar disableGutters>
//                 <Grid container>
//                     <Grid
//                         item
//                         sx={{
//                             flexGrow: 1,
//                         }}
//                         style={{ background: "red" }}
//                     >
//                         <Box
//                             display="flex"
//                             alignItems="center"
//                             style={{ paddingTop: "5px" }}
//                         >
//                             <Image
//                                 src="/assets/logo.svg"
//                                 alt="logo"
//                                 width={37}
//                                 height={37}
//                             />
//                             <span className={navStyles.appName}>mtaji</span>
//                         </Box>
//                     </Grid>
//                     <Grid
//                         item
//                         sx={{
//                             flexGrow: 3,
//                             display: { md: "none", lg: "flex" },
//                         }}
//                         style={{ background: "green" }}
//                     >
//                         <Grid
//                             container
//                             style={{
//                                 padding: "0px 20%",
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <Grid
//                                     key={page}
//                                     item
//                                     xs={6}
//                                     sm={6}
//                                     md={3}
//                                     lg={3}
//                                     xl={3}
//                                     align={"center"}
//                                 >
//                                     <Typography
//                                         noWrap
//                                         component="a"
//                                         href="/"
//                                         style={{
//                                             fontFamily: "'Poppins', sans-serif",
//                                             fontSize: "18px",
//                                             fontWeight: "400",
//                                             color: "#09062D",
//                                         }}
//                                     >
//                                         {page}
//                                     </Typography>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Grid>
//                     <Grid
//                         item
//                         sx={{
//                             flexGrow: 2,
//                         }}
//                         style={{ background: "yellow" }}
//                     >
//                         <Box
//                             sx={{
//                                 display: { lg: "flex", md: "none" },
//                             }}
//                             justifyContent="right"
//                         >
//                             Account
//                         </Box>
//                         <Box
//                             sx={{
//                                 display: { md: "flex", lg: "none" },
//                             }}
//                             justifyContent="right"
//                         >
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleOpenNavMenu}
//                                 color="inherit"
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorElNav}
//                                 anchorOrigin={{
//                                     vertical: "bottom",
//                                     horizontal: "left",
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: "top",
//                                     horizontal: "left",
//                                 }}
//                                 open={Boolean(anchorElNav)}
//                                 onClose={handleCloseNavMenu}
//                                 sx={{
//                                     display: { xs: "block", md: "none" },
//                                 }}
//                             >
//                                 {pages.map((page) => (
//                                     <MenuItem
//                                         key={page}
//                                         onClick={handleCloseNavMenu}
//                                     >
//                                         <Typography
//                                             textAlign="center"
//                                             style={{
//                                                 color: "#888",
//                                                 fontFamily:
//                                                     "'Quicksand', sans-serif",
//                                             }}
//                                         >
//                                             {page}
//                                         </Typography>
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                         </Box>
//                     </Grid>
//                 </Grid>
//                 <Grid container>
//                     <Image
//                         src="/assets/logo.svg"
//                         alt="logo"
//                         width={37}
//                         height={37}
//                     />
//                     <span className="text-primary text-[30px]">mtaji</span>

//                     <Box
//                         sx={{
//                             flexGrow: 1,
//                             display: { sm: "flex", lg: "none" },
//                         }}
//                     >
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: "bottom",
//                                 horizontal: "left",
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: "top",
//                                 horizontal: "left",
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: "block", md: "none" },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem
//                                     key={page}
//                                     onClick={handleCloseNavMenu}
//                                 >
//                                     <Typography
//                                         textAlign="center"
//                                         style={{
//                                             color: "#888",
//                                             fontFamily:
//                                                 "'Quicksand', sans-serif",
//                                         }}
//                                     >
//                                         {page}
//                                     </Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <Box
//                         sx={{
//                             flexGrow: 1,
//                             display: { sm: "none", lg: "flex" },
//                         }}
//                     >
//                         <Grid
//                             container
//                             style={{
//                                 padding: "0px 20%",
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <Grid
//                                     key={page}
//                                     item
//                                     xs={6}
//                                     sm={6}
//                                     md={3}
//                                     lg={3}
//                                     xl={3}
//                                     align={"center"}
//                                 >
//                                     <Typography
//                                         noWrap
//                                         component="a"
//                                         href="/"
//                                         style={{
//                                             fontFamily: "'Poppins', sans-serif",
//                                             fontSize: "18px",
//                                             fontWeight: "400",
//                                             color: "#09062D",
//                                         }}
//                                     >
//                                         {page}
//                                     </Typography>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Box>

//                     <Box sx={{ flexGrow: 0 }}>
//                         <Stack spacing={2} direction="row">
//                             <Button
//                                 component="a"
//                                 href="/login"
//                                 variant="text"
//                                 style={{
//                                     color: "#09062D",
//                                     textTransform: "none",
//                                     fontSize: "16px",
//                                 }}
//                             >
//                                 Sign in
//                             </Button>
//                             <Button
//                                 component="a"
//                                 href="/signup"
//                                 variant="contained"
//                                 style={{
//                                     backgroundColor: "#2518B8",
//                                     color: "white",
//                                     textTransform: "none",
//                                     fontSize: "16px",
//                                 }}
//                             >
//                                 Sign up
//                             </Button>
//                         </Stack>
//                         <Menu
//                             sx={{ mt: "45px" }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: "top",
//                                 horizontal: "right",
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: "top",
//                                 horizontal: "right",
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem
//                                     key={setting}
//                                     onClick={handleCloseUserMenu}
//                                 >
//                                     <Typography textAlign="center">
//                                         {setting}
//                                     </Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Grid>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Navbar;
