import React from "react";
import { Form, Row, Col, Button, Select, DatePicker } from "antd";
import DynamicForm from "./DynamicForm";

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const options = Array.from(["全部", "文学", "艺术", "收藏", "思想"]);
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: {
      span: 18,
      offset: 2
    }
  },
  colon: false
};

class SearchForm extends React.Component {
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  getOptions(data) {
    const children = [];
    console.log(this);
    for (let i = 0; i < data.length; i += 1) {
      children.push(
        <Option vlaue={data[i]} key={i}>
          {data[i]}
        </Option>
      );
    }
    return children;
  }

  getFields() {
    return (
      <Col span={24}>
        <FormItem {...formItemLayout} label="文档类型">
          <Select style={{ width: "96%" }} defaultValue="全部">
            {this.getOptions(options)}
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="文档时间">
          <RangePicker />
        </FormItem>
        <DynamicForm formItemLayout={formItemLayout} />
      </Col>
    );
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSearch}>
          <Row gutter={24}>{this.getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create()(SearchForm);
