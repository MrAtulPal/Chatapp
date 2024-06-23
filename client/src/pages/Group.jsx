import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Menu,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { matBalck } from "../constants/colors";
import { Link } from "../components/Styles/StyledComponents";
import {sampleChats} from '../constants/sampleChats';
import AvatarCard from '../components/shared/AvatarCard';

const Group = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const chatId = useSearchParams()[0].get('group')

  const navigateBack = () => navigate(-1);
  const handleMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            top: "2rem",
            right: "2rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBalck,
            color: "white",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        bgcolor={"bisque"}
      >
        <GroupLists groups={sampleChats} chatId={chatId}/>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem 3rem",
          position: "relative",
          alignItems: "center",
        }}
      >
        {IconBtns}
      </Grid>

      <Drawer open={isMobileMenuOpen} onClose={handleMobile}>
        <GroupLists w="50vh" groups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupLists = ({ w = "100%", groups = [], chatId }) => (
  <Stack width={w}>
    {groups.length ? (
      groups.map((data) => {
        return <GroupItem key={data._id} group={data} chatId={chatId} />;
      })
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>
        No groups
      </Typography>
    )}
  </Stack>
);

const GroupItem = ({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return <Link to={`?group=${_id}`} onClick={e => {
    if(chatId == _id) e.preventDefault()
  }}>
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
      <AvatarCard avatar={avatar}></AvatarCard>
      <Typography>{name}</Typography>
    </Stack>
  </Link>;
};

export default Group;
