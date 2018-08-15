import { Drawer } from "antd";
import React from "react";

class OnRightMenuClick extends React.Component {
  state = { visible: false };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
    console.log("show");
  };

  render() {
    return (
      <div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default OnRightMenuClick;
