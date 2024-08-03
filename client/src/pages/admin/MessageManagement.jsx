import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import Table from "../../components/shared/Table";
import { fileFormate, transformImg } from "../../lib/features";
import { Avatar, Stack } from "@mui/material";
import RenderAttachements from "../../components/shared/RenderAttachements";

const columns = [
  { field: "id", headerName: "ID", headerClassName: "table-header", width: 70 },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    renderCell: (params) => {
      const { attachments } = params.row;

      return !attachments?.length
        ? "No Attachments"
        : attachments.map((attachment, index) => {
            const url = attachment.url;
            const file = fileFormate(url);

            return (
              <Box>
                <a
                  href={url}
                  download
                  target="_blank"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {RenderAttachements({ file, url })}
                </a>
              </Box>
            )
          });
    },
  },
  {
    field: "Content",
    headerName: "Content",
    headerClassName: "table-header",
  },
  {
    field: "sender",
    headerName: "Sent By",
    headerClassName: "table-header",
    renderCell: (params) => (
      <Stack>
        <Avatar
          src={transformImg(params.row.avatar)}
          alt={params.row.username}
        />
        {/* <span>{params.row.sender.name}</span> */}
      </Stack>
    ),
  },
  { field: "chat", headerName: "Chat", headerClassName: "table-header" },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClassName: "table-header",
  },
  { field: "createdAt", headerName: "Time", headerClassName: "table-header" },
];
const MessageManagement = () => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);
  return (
    <AdminLayout>
      <Table heading="All Messages" columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default MessageManagement;
