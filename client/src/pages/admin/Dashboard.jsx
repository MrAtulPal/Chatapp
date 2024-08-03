import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../components/Styles/StyledComponents";
import { matBalck } from "../../constants/colors";
import { DoughnutChart, LineChart } from "../../components/specific/Charts";

const AppBar = (
  <Paper
    elevation={3}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1rem",
    }}
  >
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
      <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
      <SearchField type="text" />
      <CurveButton>Search</CurveButton>
      <Box flexGrow={1}></Box>
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
          color: "rgba(0,0,0,0.5)",
          textAlign: "center",
        }}
      >
        {moment().format("dddd, MMMM Do YYYY")}
      </Typography>
      <NotificationsIcon />
    </Stack>
  </Paper>
);

const Widget = ({ title, value, icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "2rem",
      borderRadius: "1.5rem",
      margin: "2rem 0",
      width: "20rem",
    }}
  >
    <Stack alignContent={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.5)",
          borderRadius: "50%",
          border: `5px solid ${matBalck}`,
          width: "5rem",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        {icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);

const Widgets = (
  <Stack
    direction={{
      xs: "column",
      sm: "row",
    }}
    spacing="2rem"
    justifyContent={"space-between"}
    margin={"2rem 0"}
    alignItems={"center"}
  >
    <Widget title={"Users"} value={"100"} icon={<PersonIcon />} />
    <Widget title={"Chats"} value={"100"} icon={<GroupIcon />} />
    <Widget title={"Messages"} value={"100"} icon={<GroupIcon />} />
  </Stack>
);

const Dashboard = () => {
  return (
    <AdminLayout>
      <Container component={"main"}>
        {AppBar}

        <Stack
          direction={{ sm: "column", lg: "row" }}
          flexWrap={"center"}
          justifyContent={"center"}
          alignItems={{ xs: "center", lg: "stretch" }}
          sx={{
            gap: "2rem",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
            }}
          >
            <Typography margin={"2rem 0"} variant="h4">
              Last Message
            </Typography>
            <LineChart value={[1, 2, 3, 4, 5, 6, 0]} />
          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              width: "100%",
              maxWidth: "25rem",
            }}
          >
            <DoughnutChart
              value={[12, 19]}
              labels={["Single chats", "Group chats"]}
            />
            <Stack
              position={"absolute"}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon />
              <Typography>VS</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>

        {Widgets}
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;
