import React from "react";
import { connect } from "dva";
import { Form, Input, Button, Icon, message } from "antd";
import styles from "./Login.less";

class NormalLoginForm extends React.Component {
  login = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const mailReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (email.value === "" || email.value === null) {
      message.error("输入的内容不允许为空！", 1.5);
    } else if (password.value === null || password.value === "") {
      message.error("输入的内容不允许为空！", 1.5);
    } else if (email.value !== "" && !mailReg.test(email.value)) {
      message.error("邮件地址格式错误！", 1.5);
    } else {
      const { dispatch } = this.props;
      dispatch({
        type: "login/loginUser",
        user: { email: email.value, password: password.value }
      });
      setTimeout(() => {
        const { login } = this.props;
        const { user } = login;
        if (user === null || user === {} || JSON.stringify(user) === "{}") {
          message.error("邮件地址或密码错误！", 1.5);
        } else {
          message.success("登录成功！", 0.5);
          window.location.href = `http://localhost:3000/userpage/${
            user.userId
          }`;
        }
      }, 1000);
    }
  };

  render() {
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
                id="email"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="password"
                id="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Button type="primary" onClick={this.login}>
              登录
              {/* <Link to="/userpage/:userId">登录</Link> */}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

export default connect(({ login }) => ({ login }))(Login);
