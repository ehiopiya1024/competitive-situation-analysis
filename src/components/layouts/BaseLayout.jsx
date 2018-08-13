/**
 * @Author: liu.yang
 * @Date: 2018-05-17 09:42:35
 */
import React, { Component } from "react";
import { Layout, Breadcrumb, Row, Col } from "antd";

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
    const { children } = this.props;
    const { collapsed } = this.state;
    const pn = this.props.location.pathname;
    return (
      <Layout className={styles.root}>
        <BaseMenu collapsed={collapsed} location={this.props.location} />
        <Layout>
          <TopHeader collapsed={collapsed} onCollapse={this.onCollapse} />
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
