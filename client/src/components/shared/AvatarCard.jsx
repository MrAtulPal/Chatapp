import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <>
      <Stack direction={"row"} spacing={"0.5"}>
        <AvatarGroup max={max}>
          <Box width={"3rem"} height={"5rem"}>
            {avatar.map((src, index) => (
              <Avatar
                src={src}
                key={index}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: { xs: `${index * 0.5}rem`, sm: `${index}rem` },
                }}
              />
            ))}
          </Box>
        </AvatarGroup>
      </Stack>
    </>
  );
};

export default AvatarCard;
