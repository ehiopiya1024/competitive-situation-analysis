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
    return (
      <Layout className={styles.root}>
        <BaseMenu collapsed={collapsed} />
        <Layout>
          <TopHeader collapsed={collapsed} onCollapse={this.onCollapse} />
          <Content className={styles.content}>
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ margin: "0" }}
            >
              <Col span={6}>
                <h1>这是路由</h1>
              </Col>
              <Col span={6} style={{ textAlign: "right" }}>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
