import React from "react";
import { Form, Icon, Timeline, Input, Button, Select } from "antd";
import { Link } from "react-router-dom";
import styles from "./UserPage.less";
import f from "./UserPage";

class UserInfo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collectDataNew: props.collectDataNew || [],
      user: props.user || {}
    };
  }

  componentDidMount() {
    /**
     * fetch TODO
     */
    const user = {
      username: "Alexander Pierce",
      headImg:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
      apartment: "Web Developer",
      color: "#870f68"
    };
    this.setState({ collectDataNew: f.collectDataNew(), user });
  }

  render() {
    const collectItem = this.state.collectDataNew.map((item, index) => {
      const articleNode = item.articles.map((article, i) => (
        <Timeline.Item key={`collectItemarticle-${i}`}>
          <div className={styles.articlePart}>
            <div className={styles.top}>
              <Link to="/" className={styles.title}>
                {article.title}
              </Link>
              <p className={styles.collectTime}>{article.collectTime}</p>
            </div>
            <p className={styles.content}>{article.content}</p>
          </div>
        </Timeline.Item>
      ));
      return (
        <Timeline key={`collectItemNode-${index}`}>
          <div>{item.date}</div>
          {articleNode}
        </Timeline>
      );
    });
    return (
      <div className={styles.root}>
        {/* 左边 */}
        <div className={styles.left}>
          <div className={styles.avaterBorder}>
            <img className={styles.avatar} src={this.state.user.headImg} />
          </div>
          <div className={styles.username}>{this.state.user.username}</div>
          <div className={styles.apartment}>{this.state.user.apartment}</div>
          <div className={styles.line} />
          <Form>
            <Form.Item>
              <Input.Group style={{ marginBottom: 6 }}>
                <Input
                  style={{ width: "13%" }}
                  disabled
                  prefix={<Icon type="environment" />}
                />
                <Select
                  name="apartment"
                  id="apartment"
                  onChange={f.handleChange}
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
              <Input.Group style={{ marginBottom: 6 }}>
                <Input
                  style={{ width: "13%" }}
                  disabled
                  prefix={<Icon type="user" />}
                />
                <Input
                  type="text"
                  id="username"
                  name="username"
                  style={{ width: "87%" }}
                  placeholder="用户名"
                />
              </Input.Group>
              <Input.Group style={{ marginBottom: 6 }}>
                <Input
                  style={{ width: "13%" }}
                  disabled
                  prefix={<Icon type="file" />}
                />
                <Input
                  type="file"
                  id="headImg"
                  name="headImg"
                  style={{ width: "87%" }}
                  placeholder="头像"
                />
              </Input.Group>
              <Input.Group style={{ marginBottom: 6 }}>
                <Input
                  style={{ width: "13%" }}
                  disabled
                  prefix={<Icon type="mail" />}
                />
                <Input
                  type="text"
                  id="mail"
                  name="mail"
                  style={{ width: "87%" }}
                  placeholder="邮件地址"
                />
              </Input.Group>
              <msg id="msg1" />
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={f.submitInfo}
              >
                提交
              </Button>
            </Form.Item>
            <div className={styles.line} />
            <Form.Item>
              <Input.Group>
                <Input
                  style={{ width: "13%" }}
                  disabled
                  prefix={<Icon type="key" />}
                />
                <Input
                  type="text"
                  id="password1"
                  name="password"
                  style={{ width: "87%" }}
                  placeholder="密码"
                />
              </Input.Group>
              <Input.Group>
                <Input
                  style={{ width: "13%" }}
                  disabled
                  prefix={<Icon type="key" />}
                />
                <Input
                  id="password2"
                  type="password"
                  style={{ width: "87%" }}
                  placeholder="确认密码"
                />
              </Input.Group>
              <msg id="msg2" />
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={f.submitPassword}
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
          <div>{collectItem}</div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
