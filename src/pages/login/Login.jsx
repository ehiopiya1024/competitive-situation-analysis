import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Icon } from "antd";
import styles from "./Login.less";

class NormalLoginForm extends React.Component {
  render() {
    console.log(this);
    return (
      <div className={styles.root}>
        <div className={styles.title}>
          <span className={styles.part1}>ZteSoft</span>
          <span className={styles.part2}>竞情分析</span>
        </div>
        <div>
          <Form className={styles.loginForm}>
            <Form.Item>
              <Input
                name="email"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              <Link to="/userpage/:userId">登录</Link>
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

export default Login;
