import React from "react";
import { Row, Col } from "antd";
// import styled from 'styled-components'
const necessaryKeys = {
  id: "Id",
  nickName: "Nickname",
  role: "Role",
  isActive: "Is Active",
  email: "Email",
  mobile: "Mobile"
};

const UserProfile = props => {
  return (
    <div>
      {Object.entries(props.entity)
        .filter(record => {
          return necessaryKeys[record[0]];
        })
        .map(record => {
          return (
            <Row key={record[0]}>
              <Col span={6}>{necessaryKeys[record[0]]}</Col>
              <Col span={6} offset={6}>
                {record[1]}
              </Col>
            </Row>
          );
        })}
    </div>
  );
};

export default UserProfile;
