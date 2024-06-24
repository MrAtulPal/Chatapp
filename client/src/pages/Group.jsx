import React, { Suspense, lazy } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { matBalck } from "../constants/colors";
import { Link } from "../components/Styles/StyledComponents";
import { sampleChats } from "../constants/sampleChats";
import AvatarCard from "../components/shared/AvatarCard";
import AddMembers from "../components/dialog/AddMembers";

const ConfirmModal = lazy(() => import("../components/dialog/ConfirmModal"));
const isAddMember = false;

const Group = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isEditable, setIsEditable] = React.useState(false);

  const [groupName, setGroupName] = React.useState("");
  const [updatedGroupName, setUpdatedGroupName] = React.useState("");

  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = React.useState(false);

  const chatId = useSearchParams()[0].get("group");

  const navigateBack = () => navigate(-1);
  const handleMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const updateGroupName = () => {
    setIsEditable((prev) => !prev);
  };

  const toggleConfirmDeleteHandler = () => {
    setIsConfirmDeleteOpen((prev) => !prev);
  };

  const deleteGroup = () => {};

  const openAddMemberHandler = () => {};
  React.useEffect(() => {
    setUpdatedGroupName(`Train alert ${chatId}`);
    setGroupName(`Train alert ${chatId}`);

    return () => {
      setIsEditable(false);
      setUpdatedGroupName("");
      setGroupName("");
    };
  }, [chatId]);

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

  const GroupName = (
    <Stack
      padding={"1.1rem"}
      direction={"row"}
      spacing={1}
      alignItems={"center"}
      justifyContent="center"
    >
      {isEditable ? (
        <>
          <TextField
            value={updatedGroupName}
            onChange={(e) => setUpdatedGroupName(e.target.value)}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEditable((prev) => !prev)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        startIcon={<DeleteIcon />}
        variant="outlined"
        onClick={toggleConfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
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
        <GroupLists groups={sampleChats} chatId={chatId} />
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
        {groupName && (
          <>
            {GroupName}
            <Typography
              variant="body1"
              margin={"2rem"}
              alignSelf={"flex-start"}
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                xs: "0",
                sm: "1rem",
                md: "1rem 4rem",
              }}
              spacing={"1rem"}
              bgcolor={"bisque"}
              height={"50vh"}
              overflow={"auto"}
            >
              {/* {memeber} */}
            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMembers
            open={isAddMember}
            handleClose={openAddMemberHandler}
            chatId={chatId}
          />
        </Suspense>
      )}

      {isConfirmDeleteOpen && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmModal
            open={isConfirmDeleteOpen}
            handleClose={toggleConfirmDeleteHandler}
            body={"Are you sure you want to delete this group?"}
            title={"Delete Group"}
            yesBtnColor={"error"}
            confirmHandler={deleteGroup}
          />
        </Suspense>
      )}
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

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId == _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AvatarCard avatar={avatar}></AvatarCard>
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
};

export default Group;
