import React from "react";
import { Form, Row, Col, Button, Select, DatePicker } from "antd";
import moment from "moment";
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
  Other = new Map();

  /**
   * @Author: TH
   * @Date: 2018-08-21 22:15:56
   *
   * data用于保存搜索条件
   */
  data = {};

  changeOther = newOther => {
    this.Other = newOther;
  };

  handleSearch = e => {
    e.preventDefault();
    let data;
    this.props.form.validateFields((err, values) => {
      data = { ...values };
      const map = this.Other;
      const array = [];
      map.forEach(value => {
        const val = value;
        if (val[4]) {
          for (let i = 1; i < 4; i += 1) {
            if (!val[i]) val[i] = "0";
          }
          array.push(val);
        }
      });
      data.other = array;
    });
    data.page = 0;
    this.data = data;
    window.addEventListener("scroll", this.getData);
    const { dispatch } = this.props;
    dispatch({ type: "search/getData", payload: data });
  };

  getData = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight === clientHeight + scrollTop) {
      const { dispatch } = this.props;
      this.data.page += 1;
      dispatch({ type: "search/getData", payload: this.data });
    }
  };

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: "search/clear" });
    window.removeEventListener("scroll", this.pullData);
  }

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
                {getFieldDecorator("timeRange", {
                  initialValue: [moment(), moment()]
                })(<RangePicker name="timeRange" />)}
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
