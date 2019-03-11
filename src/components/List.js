import React from "react";

const ListRow = () => <div>I'm a row in the list</div>;

const List = records => {
  records.map(record => <ListRow data={record} />);
};

export default List;
