import React from "react";
import { Link } from "../Styles/StyledComponents";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import {
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  Group as GroupIcon,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import { Navigate, useLocation } from "react-router-dom";
import { matBalck } from "../../constants/colors";

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "User",
    path: "/admin/users-management",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chat",
    path: "/admin/chats-management",
    icon: <GroupIcon />,
  },
  {
    name: "Message",
    path: "/admin/messages-management",
    icon: <MessageIcon />,
  },
];

const isAdmin = true;

const SideBar = ({ w = "100%" }) => {
  const location = useLocation();
  const handleLogout = () => {};
  return (
    <Stack width={w} direction={"column"} p="3rem" spacing={"3rem"}>
      <Typography variant="h5" textTransform={"uppercase"}>
        Chattu
      </Typography>

      <Stack spacing={"1rem"}>
        {adminTabs.map(({ name, path, icon }) => (
          <Link
            key={name}
            to={path}
            sx={
              location.pathname == path && {
                bgcolor: matBalck,
                color: "white",
                borderRadius: "0.5rem",
              }
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {icon}
              <Typography>{name}</Typography>
            </Stack>
          </Link>
        ))}

        <Link onClick={handleLogout}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon />
            <Typography>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const handleMobile = () => setIsMobile((prev) => !prev);
  const handleClose = () => setIsMobile(false);
  if (!isAdmin) return <Navigate to={'/admin'}/>;
  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          top: "1rem",
          right: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
        <SideBar />
      </Grid>

      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: "#F5F5F5" }}>
        {children}
      </Grid>

      <Drawer open={isMobile} onClose={handleClose}>
        <SideBar w="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
