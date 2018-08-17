import React from "react";
import { Link } from "react-router-dom";
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
        <Button type="primary">
          <Link to="/user">登录</Link>
        </Button>
      </Form>
    </div>
  </div>
);

export default Login;
