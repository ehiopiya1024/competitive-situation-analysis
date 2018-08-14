import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";
import styles from "./BaseMenu.less";

// sider 有一个双次render的bug，是框架自身问题，如果有强制要求，可以考虑替换
const { Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;

const BaseMenu = ({ collapsed, location }) => (
  <Sider collapsed={collapsed}>
    <div className={styles.root}>
      <div className={styles.logo}>
        <div className={styles.img}>{/* ... */}</div>
      </div>
      <Menu
        defaultSelectedKeys={[
          location.pathname === "/" ? "/home" : location.pathname
        ]}
        mode="vertical"
        theme="dark"
      >
        <MenuItemGroup key="g1" title="文档分类">
          <Menu.Item key="/home">
            <Link to="/home">
              <Icon type="home" />
              <span>今日推荐</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/literature">
            <Link to="/literature">
              <Icon type="book" />
              <span>文学</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/art">
            <Link to="/art">
              <Icon className={styles.anticon}>&#xe642;</Icon>
              <span>艺术</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/collection">
            <Link to="/collection">
              <Icon className={styles.anticon}>&#xe64d;</Icon>
              <span>收藏</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/thought">
            <Link to="/thought">
              <Icon className={`${styles.anticon} ${styles.small}`}>
                &#xe62a;
              </Icon>
              <span>思想</span>
            </Link>
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="高级功能">
          <Menu.Item key="/search">
            <Link to="/search">
              <Icon type="search" />
              <span>高级检索</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/demo">
            <Link to="/demo">
              <Icon type="smile-o" />
              <span>Demo</span>
            </Link>
          </Menu.Item>
        </MenuItemGroup>
      </Menu>
    </div>
  </Sider>
);

export default BaseMenu;
