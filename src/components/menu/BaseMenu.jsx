import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";
import styles from "./BaseMenu.less";

// sider 有一个双次render的bug，是框架自身问题，如果有强制要求，可以考虑替换
const { Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;

const BaseMenu = ({ collapsed }) => (
  <Sider collapsed={collapsed}>
    <div className={styles.root}>
      <div className={styles.logo}>
        <div className={styles.img}>{/* ... */}</div>
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="vertical" theme="dark">
        <MenuItemGroup key="g1" title="文档分类">
          <Menu.Item key="1">
            <Link to="/home">
              <Icon type="home" />
              <span>今日推荐</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/literature">
              <Icon type="book" />
              <span>文学</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/art">
              <Icon className={styles.anticon}>&#xe642;</Icon>
              <span>艺术</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/collection">
              <Icon className={styles.anticon}>&#xe64d;</Icon>
              <span>收藏</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/thought">
              <Icon className={`${styles.anticon} ${styles.small}`}>
                &#xe62a;
              </Icon>
              <span>思想</span>
            </Link>
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="高级功能">
          <Menu.Item key="9">
            <Link to="/demo">
              <Icon type="search" />
              <span>高级检索</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="10">
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
