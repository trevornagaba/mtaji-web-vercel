import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CompanyChip = (props) => {
    const { defaultLogo, companyIndustry, companyName } = props;
    return (
        // <Chip
        //     avatar={
        //         <Avatar
        //             alt={companyName}
        //             src={defaultLogo}
        //             sx={{ height: "50px"}}
        //         />
        //     }
        //     label={companyName}
        //     variant="outlined"
        //     sx={{
        //         border: "none",
        //         fontSize: "1rem",
        //         fontWeight: "500",
        //         color: "#2518B8",
        //         textDecoration: "underline",
        //     }}
        //     size="large"
        // />
        <Grid container spacing={0} direction="row" alignItems="center">
            <Grid item xs={4} sm={2} xl={1}>
                <Avatar
                    alt={companyName}
                    src={defaultLogo}

                    // sx={{ height: "50px" }}
                />
            </Grid>
            <Grid item xs={8} sm={10} xl={11}>
                <Grid container spacing={0} alignItems="center">
                    <Grid item xs={12} sm={8}>
                        <Typography
                            sx={{
                                fontSize: "1rem",
                                fontWeight: "600",
                                color: "#2518B8",
                                textDecoration: "underline",
                            }}
                        >
                            {companyName}
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography
                            sx={{
                                fontSize: "1rem",
                                fontWeight: "500",
                                color: "#666666",
                            }}
                        >
                            {companyIndustry}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item>
                <Typography
                    
                    sx={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#2518B8",
                        textDecoration: "underline",
                    }}
                >
                    {companyName}
                </Typography>
            </Grid> */}
        </Grid>
    );
};

export default CompanyChip;
