import * as React from "react";
import {
    List,
    ListSubheader,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemAvatar,
    Checkbox,
    Avatar,
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
            subheader={
                <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    sx={{
                        display: "flex",
                    }}
                >
                    <Typography
                        sx={{
                            flex: 5,
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#09062D",
                        }}
                    >
                        All Investments
                    </Typography>
                    {/* <Typography
                        sx={{
                            flex: 5,
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#09062D",
                        }}
                        align="right"
                    >
                        {isLoaded ? invstTotal() : ""}
                    </Typography> */}
                </ListSubheader>
            }
        >
            {/* {portfolio?.map((company) => {
                return (
                    <ListItem
                        key={company.companyId}
                        sx={{
                            display: "flex",
                            padding: "20px",
                            borderBottom: "1px solid #E6E6E6",
                        }}
                        secondaryAction={
                            <Typography edge="end" align="right">
                                {formatter.format(company.amount)}
                                <br />
                                <small>debt</small>
                            </Typography>
                        }
                    >
                        <Typography
                            component="a"
                            href={`/company/${company.companyId}`}
                            sx={{
                                color: "#666666",
                                flex: 4,
                            }}
                        >
                            <CompanyChip
                                defaultLogo="/assets/defaultLogo.svg"
                                companyName={company.companyName}
                            />
                        </Typography>
                        <Typography
                            sx={{
                                color: "#666666",
                                fontSize: "18px",
                                fontWeight: "400",
                                flex: 6,
                            }}
                        >
                            Payment Startup
                        </Typography>
                    </ListItem>
                );
            })} */}

            {portfolio?.map((company) => {
                return (
                    <ListItem
                        key={company.companyId}
                        sx={{
                            display: "flex",
                            padding: "20px",
                            borderBottom: "1px solid #E6E6E6",
                        }}
                        secondaryAction={
                            <Typography edge="end" align="right">
                                {formatter.format(company.amount)}
                                <br />
                                <small>debt</small>
                            </Typography>
                        }
                    >
                        <Typography
                            component="a"
                            href={`/company/${company.companyId}`}
                            sx={{
                                color: "#666666",
                                flex: 4,
                            }}
                        >
                            <CompanyChip
                                defaultLogo="/assets/defaultLogo.svg"
                                companyName={company.companyName}
                            />
                        </Typography>
                        <Typography
                            sx={{
                                color: "#666666",
                                fontSize: "18px",
                                fontWeight: "400",
                                flex: 6,
                            }}
                        >
                            Payment Startup
                        </Typography>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default InvestmentsCard;
