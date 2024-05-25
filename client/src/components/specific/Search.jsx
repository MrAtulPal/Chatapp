import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUser } from "../../constants/sampleChats";
const Search = () => {
  const search = useInputValidation();
  const [users, setUsers] = React.useState(sampleUser);
  let isLoadingSendFriendRequest = false;
  const addFrienHandler = () => {};
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={search.value}
          onChange={search.changeHandler}
        />

        <List>
          {users.map((user) => (
            <UserItem 
              user={user}
              key={user._id}
              handler={addFrienHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
