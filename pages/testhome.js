import PageTemplate from "../components/pageTemplate";
import styles from "../styles/aml.module.css";
import {
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent,
    Paper,
} from "@mui/material";

const TestHome = () => {
    return (
        <PageTemplate
            hasNavbar={false}
            hasRaiseFunds={false}
            hasSubscribetoBlog={false}
            hasWrapper={true}
            hasFooter={false}
        >
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Paper>xs=8</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper>xs=8</Paper>
                </Grid>
            </Grid>
        </PageTemplate>
    );
};

export default TestHome;
