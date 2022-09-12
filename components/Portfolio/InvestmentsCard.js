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
    const { isLoaded, userPortfolioDetails } = props;
    // .length);
   
    

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
                minHeight: "34vh",
            }}
        >
            <Typography
                align="center"
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

            {userPortfolioDetails.length > 0 ? (
                Array.from(userPortfolioDetails)?.map((company) => {
                    return (
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
                })
            ) : (
                <Typography
                    align="center"
                    sx={{
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        color: "#666666",
                        paddingTop:"6vh",                                          
                    }}
                >
                    You have not made any investment<br/>
                    Start today !
                </Typography>
            )}
        </List>
    );
};

export default InvestmentsCard;
