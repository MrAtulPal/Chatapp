import { memo } from "react";
import { Link } from "../Styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessage,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return (
    <Link sx={{padding: "0rem"}} to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}>
      <div
        style={{
          gap: "1rem",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      > 
        <AvatarCard avatar={avatar} />
        <Stack>
          <Typography>{name}</Typography>
          {
            newMessage && (
              <Typography>
                {newMessage.count} New Messages
              </Typography>
            )
          }
        </Stack>

        {
          isOnline && (
            <Box sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "top",
              right: "1rem",
              transform: "translateY(-50%)",
            }}/>
          )
        }
      </div>
    </Link>
  );
};

export default memo(ChatItem); // to avoid re-rendering of ChatItem;
