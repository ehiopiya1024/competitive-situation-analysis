import React from "react";
import { Icon, Input } from "antd";

class InputItem extends React.Component {
  render() {
    const { IconType, placeholder, type, name, id } = this.props;

    return (
      <Input.Group style={{ marginBottom: 6 }}>
        <Input
          style={{ width: "13%" }}
          disabled
          prefix={<Icon type={IconType} />}
        />
        <Input
          type={type}
          id={id}
          name={name}
          style={{ width: "87%" }}
          placeholder={placeholder}
        />
      </Input.Group>
    );
  }
}

export default InputItem;
