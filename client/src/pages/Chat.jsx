import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grayCoolor, orange } from "../constants/colors";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/Styles/StyledComponents";
import FileMenu from "../components/dialog/FileMenu";
import { sampleMessage } from "../constants/sampleChats";
import MessageContainer from "../components/shared/MessageContainer";


const user = {
  name: "atulknowsme",
  _id: "fsd",
}
const Chat = () => {
  const containerRef = React.useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayCoolor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessage.map((i) => {
            return (
              <MessageContainer key={i._id} message={i} user={user}/>
            )
          })
        }
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton sx={{ position: "absolute", left: "1rem", rotate: '30deg' }}  >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type message here..." />
          <IconButton
            type="submit"
            sx={{
              bgcolor: orange,
              padding: "0.5rem",
              marginLeft: "1rem",
              color: "white",
              "&:hover": {
                bgcolor: 'error.dark'
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
