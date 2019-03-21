import React from "react";
import { List } from "react-virtualized";
import faker from "faker";

/**
 * Virtual Rendering Example
 */

// Fake api server response
const getRecords = () => {
  const records = [];

  for (let i = 0; i < 1000; i++) {
    const record = {
      name: faker.name.findName(),
      email: faker.internet.email()
    };
    records.push(record);
  }

  return {
    data: records
  };
};

// Predefine list dimensions
const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

class MyList extends React.Component {
  state = {
    records: []
  };

  async componentDidMount() {
    const { data } = await getRecords();
    this.setState({ records: data });
  }

  renderRow = ({ index, key, style }) => {
    const record = this.state.records[index];

    return (
      <div key={key} style={style}>
        <div>{record.name}</div>
        <div>{record.email}</div>
      </div>
    );
  };

  render() {
    return (
      <List
        width={rowWidth}
        height={listHeight}
        rowHeight={rowHeight}
        rowRenderer={this.renderRow}
        rowCount={this.state.records.length}
      />
    );
  }
}

export default MyList;

// const HomePage = () => {
//   return <div>Home</div>;
// };
// export default HomePage;
