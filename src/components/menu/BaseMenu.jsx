import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";
import styles from "./BaseMenu.less";

const { Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;

const keys = ["/home", "/literature", "/art", "/collection", "/thought"];

const BaseMenu = ({ collapsed, location }) => (
  <Sider collapsed={collapsed}>
    <div className={styles.root}>
      <Menu
        defaultSelectedKeys={[
          location.pathname === "/" ? "/home" : location.pathname
        ]}
        mode="vertical"
        theme="dark"
      >
        <MenuItemGroup key="g1" title="文档分类">
          <Menu.Item key={keys[0]}>
            <Link to={keys[0]}>
              <Icon type="home" />
              <span>今日推荐</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={keys[1]}>
            <Link to={keys[1]}>
              <Icon type="book" />
              <span>文学</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={keys[2]}>
            <Link to={keys[2]}>
              <Icon className={styles.anticon}>&#xe642;</Icon>
              <span>艺术</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={keys[3]}>
            <Link to={keys[3]}>
              <Icon className={styles.anticon}>&#xe64d;</Icon>
              <span>收藏</span>
            </Link>
          </Menu.Item>
          <Menu.Item key={keys[4]}>
            <Link to={keys[4]}>
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
