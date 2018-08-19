import React from "react";
import { connect } from "dva";
import { Link } from "react-router-dom";
import { Dropdown, Avatar, Icon, Layout, Button } from "antd";
import styles from "./TopHeader.less";

const { Header } = Layout;

class TopHeader extends React.Component {
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
    const { user } = userpage;

    const menu = (
      <div
        style={{ backgroundColor: this.props.skin.topColor }}
        className={styles.menuDiv}
      >
        {/* 头像展开 */}
        <div className={styles.menuInfo}>
          <Link to="/user">
            <img className={styles.avatar} src={user.headImg} />
          </Link>
          <div className={styles.username}>{user.username}</div>
          <div className={styles.apartment}>{user.apartment}</div>
        </div>
        <div className={styles.menuButton}>
          <Button size="small">
            <Link to="/userpage/:userId">用户账户</Link>
          </Button>
          <Button size="small">
            <Link to="/login">退出系统</Link>
          </Button>
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
                    src={user.headImg}
                  />
                  <span className={styles.name}>{user.username}</span>
                </span>
              </Dropdown>
            </div>
          </div>
        </Header>
      </div>
    );
  }
}

export default connect(({ userpage }) => ({ userpage }))(TopHeader);
