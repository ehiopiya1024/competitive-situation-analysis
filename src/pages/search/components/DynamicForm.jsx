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

const item = (icon, click, k) => (
  <Row gutter={8} key={k}>
    <Col span={4}>
      <Select defaultValue="AND">{getOptions(["AND", "OR", "NOT"])}</Select>
    </Col>
    <Col span={4}>
      <Select defaultValue="标题">
        {getOptions(["标题", "标签", "全文"])}
      </Select>
    </Col>
    <Col span={4}>
      <Select defaultValue="词组">{getOptions(["词组", "非词组"])}</Select>
    </Col>
    <Col span={11}>
      <Input placeholder="请输入..." />
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
        onClick={click}
      />
    </Col>
  </Row>
);

class DynamicForm extends React.Component {
  state = {
    children: []
  };

  add = () => {
    const { children } = this.state;
    children.push(item("minus-circle-o", this.remove, uuid));
    uuid += 1;
    this.setState({
      children
    });
  };

  remove = k => {
    const { children } = this.state;
    children.splice(k, 1);
    this.setState({
      children
    });
  };

  render = () => (
    <FormItem {...this.props.formItemLayout} label="检索条件">
      {item("plus-circle-o", this.add, 0)}
      <Row>{this.state.children}</Row>
    </FormItem>
  );
}

export default DynamicForm;
