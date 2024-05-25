import { Dialog, DialogTitle, Stack, Typography, ListItem, Avatar, Button } from "@mui/material";
import React from "react";
import { sampleNotification } from "../../constants/sampleChats";

const Notification = () => {
  const friendReqHandler = ({_id, accept}) => {};
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotification.length > 0 ? (
          sampleNotification.map(({ sender, _id }) => (
            <NotificationItem
              sender={sender}
              _id={_id}
              handler={friendReqHandler}
              key={_id}
            ></NotificationItem>
          ))
        ) : (
          <Typography textAlign={"center"}>0 Notification</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = ({ sender, _id, handler }) => {
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar></Avatar>
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            width: "100%",
          }}
        >
          {`${sender.name} sent you a friend request`}
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }}>
          <Button onClick={handler({_id, accept:true})} >Accept</Button>
          <Button color="error" onClick={handler({_id, accept:false})} >Reject</Button>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default Notification;
