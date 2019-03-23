import React from "react";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "NickName",
    dataIndex: "nickName",
    key: "nickName",
    render: text => <a href="javascript:;">{text}</a>
  },

  {
    title: "Role",
    dataIndex: "role",
    key: "role"
  },
  {
    title: "IsActive",
    key: "isActive",
    dataIndex: "isActive"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Delete {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Edit</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

// ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);
