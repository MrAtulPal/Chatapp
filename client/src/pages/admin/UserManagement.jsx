import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import Table from "../../components/shared/Table";
import { transformImg } from "../../lib/features";

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
    field: "firstName",
    headerName: "First name",
    headerClassName: "table-header",
  },
  {
    field: "username",
    headerName: "Username",
    headerClassName: "table-header",
  },
  { field: "friends", headerName: "Friends", headerClassName: "table-header" },
  { field: "groups", headerName: "Groups", headerClassName: "table-header" },
  { field: "updatedAt", headerName: "Updated At", headerClassName: "table-header" },
];
const UserManagement = () => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);
  return (
    <AdminLayout>
      <Table heading="All Users" columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default UserManagement;
