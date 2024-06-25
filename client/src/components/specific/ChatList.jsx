import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessageAlert = [{ chatId: 0, count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} overflow={"auto"} height={"100%"}>
      {chats?.map((data, index) => {
        const sameSender = chatId == data._id;
        const { _id, name, message, members, groupChat, avatar } = data;
        return (
          <ChatItem
            index={index}
            key={_id}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={sameSender}
            isOnline={onlineUsers.includes(_id)}
            newMessage={newMessageAlert.find((alert) => alert.chatId === _id)}
            handleDeleteChatOpen={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
