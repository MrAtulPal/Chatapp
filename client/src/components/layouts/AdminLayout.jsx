import { Grid } from "@mui/material";
import React from "react";

const SideBar = () => {
    return <div>SideBar</div>
};

const AdminLayout = ({ children }) => {
  return (
    <Grid container minHeight={"100vh"}>
      <Grid
        item
        md={4}
        lg={3}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <SideBar />
      </Grid>
    </Grid>
  );    
};

export default AdminLayout;
