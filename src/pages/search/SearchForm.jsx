import React from "react";
import { Form, Row, Col, Input, Button } from "antd";

const FormItem = Form.Item;

class SearchForm extends React.Component {
  formdata = Array.from(["文档分类", "文档时间", "检索条件", "文档来源"]);

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  // To generate mock Form.Item
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    const data = this.formdata;
    for (let i = 0; i < data.length; i += 1) {
      children.push(
        <Col span={8} key={i}>
          <FormItem label={data[i]}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
      );
    }
    return children;
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
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default SearchForm;
