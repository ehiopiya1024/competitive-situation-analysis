import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Avatar, Icon, Layout, Button } from "antd";
import styles from "./TopHeader.less";
import OnRightMenuClick from "../rightMenu/RightMenu";

const { Header } = Layout;

const TopHeader = ({ collapsed, onCollapse }) => {
  const user = {
    username: "Alexander Pierce",
    headImg:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534556865&di=4e32109595745e1b26b8306a745dc505&imgtype=jpg&er=1&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150401%2F1954212091-9.jpg",
    apartment: "Web Developer",
    color: "#870f68"
  };
  const onMenuClick = () => {
    // ...
  };
  const showDrawer = () => console.log("show");
  const menu = (
    <div className={styles.menuDiv} onClick={onMenuClick}>
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
          <Link to="/user">用户账户</Link>
        </Button>
        <Button size="small">退出系统</Button>
      </div>
    </div>
  );
  return (
    <div>
      <Header className={styles.root}>
        {/* 折叠菜单 */}
        <div className={styles.left}>
          <Icon
            className={styles.trigger}
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={onCollapse}
          />
        </div>

        {/* 用户头像 */}
        <div className={styles.right}>
          <div className={styles.item}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <span className={styles.userBox}>
                <Avatar className={styles.img} icon="user" src={user.headImg} />
                <span className={styles.name}>{user.username}</span>
              </span>
            </Dropdown>
          </div>
          {/* 系统设置按钮 */}
          <a href="#" className={styles.setting} onClick={showDrawer}>
            <Icon type="setting" />
          </a>
        </div>
      </Header>
      {/* <div id="showDrawer" className={styles.showDrawer}>
        show
      </div> */}
    </div>
  );
};

export default TopHeader;
