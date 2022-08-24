import * as React from "react";
import {
    Grid,
    List,
    ListSubheader,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemAvatar,
    Checkbox,
    Avatar,
    Divider,
    Typography,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";

import CompanyChip from "./CompanyChip";

import defaultLogo from "../../public/assets/defaultLogo.svg";

const InvestmentsCard = (props) => {
    const { isLoaded, portfolio } = props;

    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const invstTotal = () => {
        let total = 0;
        try {
            portfolio.forEach((item) => {
                total += parseInt(item.amount);
            });
            return formatter.format(total);
        } catch (err) {}
    };

    return (
        <List
            dense
            sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: "20px",
                padding: "15px",
            }}
        >
            <Typography
                align="left"
                sx={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#09062D",
                    paddingTop: "20px",
                    marginLeft: "20px",
                }}
            >
                All Investments
            </Typography>
            {portfolio?.map((company) => {
                return (
                    // <ListItem
                    //     key={company.companyId}
                    //     sx={{
                    //         display: "flex",
                    //         padding: "20px",
                    //         borderBottom: "1px solid #E6E6E6",
                    //     }}
                    //     secondaryAction={
                    //         <Typography edge="end" align="right">
                    //             {formatter.format(company.amount)}
                    //             <br />
                    //             {company.instrument}
                    //         </Typography>
                    //     }
                    // >
                    //     <Typography
                    //         component="a"
                    //         href={`/company/${company.companyId}`}
                    //         sx={{
                    //             color: "#666666",
                    //             flex: 4,
                    //         }}
                    //     >
                    //         <CompanyChip
                    //             defaultLogo="/assets/defaultLogo.svg"
                    //             companyName={company.companyName}
                    //         />
                    //     </Typography>
                    //     <Typography
                    //         sx={{
                    //             color: "#666666",
                    //             fontSize: "18px",
                    //             fontWeight: "400",
                    //             flex: 6,
                    //         }}
                    //     >
                    //         {company.industry}
                    //     </Typography>
                    // </ListItem>

                    <ListItem key={company.companyId}>
                        <Typography
                            component="a"
                            href={`/company/${company.companyId}`}
                            sx={{
                                flex: 1,
                            }}
                        >
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justifyItems="center"
                                xs={12}
                                sx={{
                                    padding: "20px",
                                    borderBottom: "1px solid #E6E6E6",
                                }}
                            >
                                {/* <Grid item sm={4} xs={4} >
                                    <CompanyChip
                                        defaultLogo="/assets/defaultLogo.svg"
                                        companyName={company.companyName}
                                    />
                                </Grid>

                                <Grid item sm={4} xs={4}>
                                    <Typography
                                        align="center"
                                        sx={{
                                            fontSize: "1rem",
                                            fontWeight: "500",
                                            color: "#666666",
                                        }}
                                        
                                    >
                                        {company.industry}
                                    </Typography>
                                </Grid> */}

                                {/* <Grid item xs={8} alignContent="right">
                                    <Grid container spacing={0}>
                                        <Grid item sm={6} xs={12}>
                                            <CompanyChip
                                                defaultLogo="/assets/defaultLogo.svg"
                                                companyName={
                                                    company.companyName
                                                }
                                                companyIndustry={
                                                    company.industry
                                                }
                                            />
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <Typography
                                                align="center"
                                                sx={{
                                                    fontSize: "1rem",
                                                    fontWeight: "500",
                                                    color: "#666666",
                                                }}
                                            >
                                                {company.industry}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid> */}
                                <Grid item xs={8}>
                                    <CompanyChip
                                        defaultLogo="/assets/defaultLogo.svg"
                                        companyName={company.companyName}
                                        companyIndustry={company.industry}
                                    />
                                </Grid>
                                <Grid item xs={4} alignContent="right">
                                    <Grid
                                        container
                                        direction="column"
                                        spacing={0}
                                    >
                                        <Grid item>
                                            <Typography
                                                align="right"
                                                sx={{
                                                    fontSize: "1rem",
                                                    fontWeight: "500",
                                                    color: "#666666",
                                                }}
                                            >
                                                {formatter.format(
                                                    company.amount
                                                )}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                align="right"
                                                sx={{
                                                    fontSize: "0.8rem",
                                                    fontWeight: "500",
                                                    color: "#8c8c8c",
                                                }}
                                            >
                                                {company.instrument}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Typography>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default InvestmentsCard;
