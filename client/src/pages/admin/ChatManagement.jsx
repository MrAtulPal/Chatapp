import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import Table from "../../components/shared/Table";
import { transformImg } from "../../lib/features";
import { Avatar, Stack } from "@mui/material";
import AvatarCard from "../../components/shared/AvatarCard";

const columns = [
  { field: "id", headerName: "ID", headerClassName: "table-header", width: 70 },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    renderCell: (params) => (
      <img src={transformImg(params.row.avatar)} alt={params.row.username} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassName: "table-header",
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    renderCell: (params) => (
      <AvatarCard max={100} avatar={params.row.members} />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"2rem"}>
        <Avatar alt={params.row.creator?.name} src={transformImg(params.row.creator?.avatar)} />
        <span>{params.row.creator?.name}</span>
      </Stack>
    )
  },
];
const ChatManagement = () => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);
  return (
    <AdminLayout>
      <Table heading="All Chats" columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default ChatManagement