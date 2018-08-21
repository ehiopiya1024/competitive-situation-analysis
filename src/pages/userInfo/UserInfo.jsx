import React from "react";
import { connect } from "dva";
import { Form, Icon, Input, Button, Select, message } from "antd";
import styles from "./UserPage.less";
import CollectItem from "./components/CollectItem";
import InputItem from "./components/InputItem";

let apartment = "";

class UserInfo extends React.Component {
  getApartmentValue = value => {
    apartment = value;
  };

  submitInfo = () => {
    const username = document.getElementById("username");
    const mail = document.getElementById("mail");
    const mailReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (mail.value !== "" && !mailReg.test(mail.value)) {
      message.error("邮件地址格式错误！", 1.5);
    } else {
      const { dispatch } = this.props;
      dispatch({
        type: "userpage/modifyUserInfo",
        user: {
          userId: this.props.match.params.userId,
          apartment,
          username: username.value,
          mail: mail.value
        }
      });
      setTimeout(() => {
        const { userpage } = this.props;
        const { user } = userpage;
        username.value = user.username;
        mail.value = user.email;
      }, 700);
      message.success("修改成功！", 1.5);
    }
  };

  submitPassword = () => {
    const p1 = document.getElementById("password1");
    const p2 = document.getElementById("password2");
    if (p1.value === "" || p1.value === null) {
      message.error("输入的内容不允许为空！", 1.5);
    } else if (p2.value === null || p2.value === "") {
      message.error("输入的内容不允许为空！", 1.5);
    } else if (p1.value !== p2.value) {
      message.error("两次输入的内容不一致！", 1.5);
    } else {
      const { dispatch } = this.props;
      dispatch({
        type: "userpage/modifyUserPassword",
        user: {
          userId: this.props.match.params.userId,
          password: p1.value
        }
      });
      message.success("密码修改成功！", 1.5);
      p1.value = "";
      p2.value = "";
    }
  };

  componentDidMount() {
    if (!this.props.match) return;
    const { dispatch } = this.props;
    dispatch({
      type: "userpage/getData",
      user: { userId: this.props.match.params.userId }
    });
  }

  render() {
    const { userpage } = this.props;
    const { collectDataNew, user } = userpage;

    return (
      <div className={styles.root}>
        {/* 左边 */}
        <div className={styles.left}>
          <div className={styles.avaterBorder}>
            <img className={styles.avatar} src={user.headImg} />
          </div>
          <div className={styles.username}>{user.username}</div>
          <div className={styles.apartment}>{user.apartment}</div>
          <div className={styles.line} />
          <Form>
            <Form.Item>
              <Input.Group style={{ marginBottom: 6 }}>
                <Input
                  className={styles.inputLeft}
                  style={{ width: "13%" }}
                  disabled
                  prefix={<Icon type="environment" />}
                />
                <Select
                  name="apartment"
                  id="apartment"
                  defaultValue={user.apartment}
                  onChange={this.getApartmentValue}
                  className={styles.select}
                  style={{ width: "87%", margin: -3, marginLeft: 1 }}
                >
                  <Select.Option style={{ paddingLeft: 5 }} value="市场部">
                    市场部
                  </Select.Option>
                  <Select.Option value="开发部">开发部</Select.Option>
                  <Select.Option value="财务部">财务部</Select.Option>
                </Select>
              </Input.Group>

              <InputItem
                IconType="user"
                placeholder="用户名"
                type="text"
                name="username"
                id="username"
                defaultValue={user.username}
              />
              <InputItem
                IconType="mail"
                placeholder="邮件地址"
                type="text"
                name="mail"
                id="mail"
                defaultValue={user.email}
              />
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={this.submitInfo}
              >
                提交
              </Button>
            </Form.Item>
            <div className={styles.line} />
            <Form.Item>
              <InputItem
                IconType="key"
                placeholder="密码"
                type="password"
                name="password"
                id="password1"
              />
              <InputItem
                IconType="key"
                placeholder="确认密码"
                type="password"
                id="password2"
              />
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={this.submitPassword}
              >
                修改密码
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* 右边 */}
        <div className={styles.right}>
          <h2>
            <strong>收藏文档</strong>
          </h2>
          <div>
            <CollectItem collectDataNew={collectDataNew} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ userpage }) => ({ userpage }))(UserInfo);
