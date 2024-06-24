import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";
import { sampleUser } from "../../constants/sampleChats";
import UserItem from "../shared/UserItem";

const AddMembers = ({ isLoadingAddMember, addMember, chatId }) => {
  const [members, setMembers] = React.useState(sampleUser);
  const [selectedMembers, setselectedMembers] = React.useState([]);

  const selectMemberHandler = (id) => {
    setselectedMembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addFriendHandler = () => {};
  const addMemberSubmitHandler = () => {};
  const closeHandler = () => {
    setMembers([]);
    setselectedMembers([]);
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p="2rem" width="20rem" spacing="2rem">
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing="1rem">
          {members.length > 0 ? (
            members.map((chat) => (
              <UserItem
                key={chat._id}
                user={chat}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(chat._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}> No Friends </Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button size="large" color="error" onClick={closeHandler}>
            Cancle
          </Button>
          <Button
            size="large"
            variant="contained"
            disabled={isLoadingAddMember}
            onClick={addMemberSubmitHandler}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMembers;
