import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Avatar, Icon, Layout, Button } from "antd";
import styles from "./TopHeader.less";

const { Header } = Layout;

class TopHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {
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
    this.setState({ user });
  }

  render() {
    const menu = (
      <div
        style={{ backgroundColor: this.props.skin.topColor }}
        className={styles.menuDiv}
      >
        {/* 头像展开 */}
        <div className={styles.menuInfo}>
          <Link to="/user">
            <img className={styles.avatar} src={this.state.user.headImg} />
          </Link>
          <div className={styles.username}>{this.state.user.username}</div>
          <div className={styles.apartment}>{this.state.user.apartment}</div>
        </div>
        <div className={styles.menuButton}>
          <Button size="small">
            <Link to="/user">用户账户</Link>
          </Button>
          <Button size="small">退出系统</Button>
        </div>
      </div>
    );
    return (
      <div>
        <Header
          className={styles.root}
          style={{ backgroundColor: this.props.skin.topColor }}
        >
          {/* 折叠菜单 */}
          <div className={styles.left}>
            <Icon
              className={styles.trigger}
              type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.props.onCollapse}
            />
          </div>

          {/* 用户头像 */}
          <div className={styles.right}>
            <div className={styles.item}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <span className={styles.userBox}>
                  <Avatar
                    className={styles.img}
                    icon="user"
                    src={this.state.user.headImg}
                  />
                  <span className={styles.name}>
                    {this.state.user.username}
                  </span>
                </span>
              </Dropdown>
            </div>
          </div>
        </Header>
      </div>
    );
  }
}

export default TopHeader;
