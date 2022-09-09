import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const WalletCard = (props) => {
    const { isLoaded, portfolio } = props;
    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    const invstTotal = () => {
        let total = 0;
        try {
            portfolio.forEach((item) => {
                total += parseInt(item.amount);
            });
            return formatter.format(total);
        } catch (err) {}
    };
    // console.log("check" & invstTotal);

    return (
        <Box
            sx={{
                background: "white",
                width: "100%",
                height: "200px",
                borderRadius: "20px",
                padding: "15px",
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#09062D",
                    }}
                    color="text.secondary"
                    gutterBottom
                >
                    Cash
                </Typography>
                <Typography
                    variant="h3"
                    component="div"
                    style={{
                        fontWeight: "800",
                        paddingTop: "15px",
                    }}
                    align="center"
                >
                    {isLoaded ? invstTotal() : ""}
                </Typography>
            </CardContent>
        </Box>
    );
};

export default WalletCard;
