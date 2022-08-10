import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const CompanyChip = (props) => {
    const { defaultLogo, companyName } = props
    return (
        <Stack direction="row" spacing={1}>
            <Chip
                avatar={
                    <Avatar alt={companyName} src={defaultLogo} sx={{ height: "50px" }}/>
                }
                label={companyName}
                variant="outlined"
                sx={{
                    border: "none",
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#2518b8"

                }}
                size="large"
            />
        </Stack>
    );
}

export default CompanyChip;
