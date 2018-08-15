import React from "react";
import { Form, Input, Button } from "antd";
import styles from "./Login.less";

const Login = () => (
  <div className={styles.root}>
    <div className={styles.title}>
      <span className={styles.part1}>ZteSoft</span>
      <span className={styles.part2}>竞情分析</span>
    </div>
    <div>
      <Form className={styles.loginForm}>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="primary">登录</Button>
      </Form>
    </div>
  </div>
);

export default Login;
