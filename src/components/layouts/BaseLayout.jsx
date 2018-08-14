/**
 * @Author: liu.yang
 * @Date: 2018-05-17 09:42:35
 */
import React, { Component } from "react";
import { Layout } from "antd";

import TopHeader from "../header/TopHeader";
import BaseMenu from "../menu/BaseMenu";
import styles from "./BaseLayout.less";

const { Content } = Layout;

class BaseLayout extends Component {
  state = {
    collapsed: false
  };

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { children, location } = this.props;
    const { collapsed } = this.state;
    return (
      <Layout className={styles.root}>
        <BaseMenu collapsed={collapsed} location={location} />
        <Layout>
          <TopHeader collapsed={collapsed} onCollapse={this.onCollapse} />
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
