import { Form, Row, Col, Select, Input, Icon } from "antd";
import React from "react";

const { Option } = Select;
const FormItem = Form.Item;
const getOptions = data => {
  const children = [];
  for (let i = 0; i < data.length; i += 1) {
    children.push(
      <Option vlaue={data[i]} key={i}>
        {data[i]}
      </Option>
    );
  }
  return children;
};
let uuid = 1;

class DynamicForm extends React.Component {
  item = (icon, click, k) => (
    <Row gutter={8} key={k}>
      <Col span={4}>
        <Select defaultValue="0" onChange={this.handleChange.bind(this, k, 1)}>
          {getOptions(["AND", "OR", "NOT"])}
        </Select>
      </Col>
      <Col span={4}>
        <Select defaultValue="0" onChange={this.handleChange.bind(this, k, 2)}>
          {getOptions(["标题", "标签", "全文"])}
        </Select>
      </Col>
      <Col span={4}>
        <Select defaultValue="0" onChange={this.handleChange.bind(this, k, 3)}>
          {getOptions(["词组", "非词组"])}
        </Select>
      </Col>
      <Col span={11}>
        <Input
          onChange={this.handleChange.bind(this, k, 4)}
          placeholder="请输入..."
        />
      </Col>
      <Col span={1}>
        <Icon
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color: "#1890ff",
            marginLeft: 8
          }}
          type={icon}
          onClick={click.bind(k)}
        />
      </Col>
    </Row>
  );

  state = {
    children: []
  };

  Other = new Map();

  handleChange = (line, number, option) => {
    const content = number === 4 ? option.target.value : option;
    if (this.Other.has(line)) {
      this.Other.get(line)[number] = content;
    } else {
      this.Other.set(line, {});
      this.Other.get(line)[number] = content;
    }
    this.props.changeOther(this.Other);
  };

  add = () => {
    const { children } = this.state;
    children.push(this.item("minus-circle-o", this.remove, uuid));
    uuid += 1;
    this.setState({
      children
    });
  };

  remove = (k, that) => {
    const { children } = this.state;
    children.splice(k, 1);
    this.setState({
      children
    });
    this.Other.delete(that);
    this.props.changeOther(this.Other);
  };

  render() {
    return (
      <FormItem {...this.props.formItemLayout} label="检索条件">
        {this.item("plus-circle-o", this.add, 0)}
        <Row>{this.state.children}</Row>
      </FormItem>
    );
  }
}

export default DynamicForm;
