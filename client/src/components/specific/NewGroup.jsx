import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { sampleUser } from "../../constants/sampleChats";
import UserItem from "../shared/UserItem";

const NewGroup = () => {
  const [members, setMembers] = React.useState(sampleUser);
  const [selectedMembers, setselectedMembers] = React.useState([]);
  const isLoadingSendFriendRequest = false;

  const groupName = useInputValidation("");
  const selectMemberHandler = (id) => {
    setselectedMembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const closeHandler = () => {};

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle variant="h4" textAlign={"center"}>
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography></Typography>

        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Button variant="outlined" color="error">
            Cancel
          </Button>
          <Button variant={"contained"}> Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
