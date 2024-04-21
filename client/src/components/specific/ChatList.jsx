import { Stack } from "@mui/material";
import React from "react";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessageAlert = [{ chatId: 0, count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w}>
      {chats?.map((data) => {
        return <div>fk</div>;
      })}
    </Stack>
  );
};

export default ChatList;
