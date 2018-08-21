import React from "react";
import { Form, Row, Col, Button, Select, DatePicker } from "antd";
import DynamicForm from "./DynamicForm";
import Styles from "./SearchForm.less";

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

class SearchForm extends React.Component {
  /**
   * @Author: TH
   * @Date: 2018-08-21 15:26:18
   *
   * other用于保存动态数组的内容
   */
  other = [];

  changeOther = newOther => {
    this.other = newOther;
    console.log(this.other);
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
    const { dispatch } = this.props;
    dispatch({ type: "search/getData", requestment: "nothing." });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={Styles.root}>
        <Form onSubmit={this.handleSearch}>
          <Row gutter={24}>
            <Col span={24}>
              <FormItem {...formItemLayout} label="文档类型">
                {getFieldDecorator("articleType", { initialValue: "0" })(
                  <Select style={{ width: "96%" }}>
                    {getOptions(options)}
                  </Select>
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="文档时间">
                {getFieldDecorator("timeRange")(
                  <RangePicker name="timeRange" />
                )}
              </FormItem>
              <DynamicForm
                formItemLayout={formItemLayout}
                changeOther={this.changeOther}
              />
            </Col>
          </Row>
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
