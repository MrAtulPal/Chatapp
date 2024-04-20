import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { orange } from "../../constants/colors";
import {
  Add,
  Group,
  Logout,
  Menu as MenuIcon,
  Notifications,
  Search,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNotification, setIsNotitfication] = useState(false);
  const [isNewGroup, setISNewGroup] = useState(false);

  const handleMobile = () => setIsMobile((prev) => !prev);
  const openSearchDialog = () => setIsSearch((prev) => !prev);
  const openNewGroup = () => setISNewGroup((prev) => !prev);
  const logoutHandler = () => location.assign("/logout");
  const openNotification = () => setIsNotitfication((prev) => !prev);
  const navigateToGroup = () => navigate("/groups");

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chattu
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconBtn
                title={"Search"}
                onClick={openSearchDialog}
                icon={<Search />}
              />
              <IconBtn
                title={"New Group"}
                onClick={openNewGroup}
                icon={<Add />}
              />
              <IconBtn
                title={"Manage Group"}
                onClick={navigateToGroup}
                icon={<Group />}
              />
              <IconBtn
                title={"Logout"}
                onClick={logoutHandler}
                icon={<Logout />}
              />
              <IconBtn
                title={"Notification"}
                onClick={openNotification}
                icon={<Notifications />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const IconBtn = ({ title, onClick, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" onClick={onClick} size="large">
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
