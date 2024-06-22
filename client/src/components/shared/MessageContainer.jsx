import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { lightBlue } from "../../constants/colors";
import moment from "moment";
import { fileFormate } from "../../lib/features";
import RenderAttachements from "./RenderAttachements";

const MessageContainer = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = user._id == sender._id;

  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={lightBlue} fontWeight={600} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachments.length > 0 &&
        attachments.map((attatchment, index) => {
          const url = attatchment.url;
          const file = fileFormate(url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                {
                    RenderAttachements({file, url})
                }
              </a>
            </Box>
          );
        })}

      {timeAgo && (
        <Typography variant="caption" color={"text.secondary"}>
          {timeAgo}
        </Typography>
      )}
    </div>
  );
};

export default memo(MessageContainer);
