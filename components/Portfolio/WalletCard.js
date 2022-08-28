import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

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
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-around"
            sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: "20px",
                padding: "15px",
                height: "100%",
                minHeight: "34vh",
            }}
        >
            <Grid item>
                {" "}
                <Typography
                    align="center"
                    sx={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#09062D",
                    }}
                >
                    Net worth
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    component="div"
                    sx={{
                        fontWeight: "700",
                        fontSize: "3rem",
                    }}
                    align="center"
                >
                    {portfolio.length > 0
                        ? isLoaded
                            ? invstTotal()
                            : ""
                        : "$0"}
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    component="a"
                    href=""
                    variant="contained"
                    style={{
                        backgroundColor: "#2518B8",
                        color: "white",
                        textTransform: "none",
                        height: "40px",
                    }}
                >
                    Add Investments
                </Button>
            </Grid>
        </Grid>
    );
};

export default WalletCard;
