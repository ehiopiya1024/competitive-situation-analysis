import React, { Component } from "react";
import { Layout, Icon, Drawer, Switch, Affix } from "antd";
import { Layout } from "antd";

import TopHeader from "../header/TopHeader";
import BaseMenu from "../menu/BaseMenu";
import styles from "./BaseLayout.less";

const { Content } = Layout;

const skins = [
  {
    skinId: "1",
    title: "Red",
    theme: "dark",
    topColor: "#dd4b39",
    leftColor: "#001529"
  },
  {
    skinId: "2",
    title: "blue",
    theme: "dark",
    topColor: "#3c8dbc",
    leftColor: "#001529"
  },
  {
    skinId: "3",
    title: "White",
    theme: "dark",
    topColor: "#f9fafc",
    leftColor: "#001529"
  },
  {
    skinId: "4",
    title: "RedLight",
    theme: "light",
    topColor: "#dd4b39",
    leftColor: "#ffffff"
  },
  {
    skinId: "5",
    title: "blueLight",
    theme: "light",
    topColor: "#3c8dbc",
    leftColor: "#ffffff"
  },
  {
    skinId: "6",
    title: "WhiteLight",
    theme: "light",
    topColor: "#f9fafc",
    leftColor: "#ffffff"
  }
];

class BaseLayout extends Component {
  constructor(props) {
    super();
    this.state = {
      collapsed: false,
      visible: false,
      skin: props.skin || skins[4],
      fixed: props.fixed || false
    };
  }

  show = () => {
    this.setState({ visible: true });
  };

  close = () => {
    this.setState({ visible: false });
  };

  onCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  changeSkin = id => {
    for (let i = 0; i < skins.length; i += 1) {
      if (id === skins[i].skinId) {
        this.setState({ skin: skins[i] });
        break;
      }
    }
  };

  onChangeLayout = checked => {
    console.log(checked);
    if (checked) {
      this.setState({ fixed: true });
    } else {
      this.setState({ fixed: false });
    }
  };

  top = () => (
    <div className={styles.top}>
      <div className={styles.topLeft}>
        <TopHeader
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          skin={this.state.skin}
        />
      </div>
      {/* 系统设置菜单 */}
      <div
        className={styles.set}
        style={{ backgroundColor: this.state.skin.topColor }}
      >
        <a href="#" className={styles.setting} onClick={this.show}>
          <Icon type="setting" />
        </a>
        <div>{this.getRightMenu()}</div>
      </div>
    </div>
  );

  skinNode = () =>
    skins.map((item, index) => (
      <div
        className={styles.part}
        onClick={this.changeSkin.bind(this, item.skinId)}
        key={`skinNode-${index}`}
      >
        <span className={styles.title}>{item.title}</span>
        <div className={styles.skin} style={{ backgroundColor: item.topColor }}>
          <div
            className={styles.left}
            style={{ backgroundColor: item.leftColor }}
          />
          <div className={styles.right} />
        </div>
      </div>
    ));

  getRightMenu = () => (
    <div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={this.close}
        visible={this.state.visible}
      >
        <div className={styles.setting}>
          <div>
            <p className={styles.settingTitle}>布局设置</p>
            <div className={styles.settingLayout}>
              <span>不固定布局</span>
              <Switch
                onChange={this.onChangeLayout}
                checked={this.state.fixed}
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="cross" />}
              />
            </div>
            <div className={styles.settingContent}>
              默认固定布局, 导航栏将保持固定, 只有文档内容区域滚动，激活则取消.
            </div>
          </div>
          <br />
          <div>
            <p className={styles.settingTitle}>皮肤设置</p>
            <div>
              <div className={styles.skinNode}>{this.skinNode()}</div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );

  render() {
    const { children, location } = this.props;
    const { collapsed } = this.state;

    return (
      <Layout className={styles.root}>
        <Layout>
          <div>
            {this.state.fixed ? (
              <Affix>{this.top()}</Affix>
            ) : (
              <div>{this.top()}</div>
            )}
            <Layout>
              <div
                style={{
                  width: "200px",
                  backgroundColor: this.state.skin.leftColor
                }}
              >
                {this.state.fixed ? (
                  <Affix offsetTop={58}>
                    <BaseMenu
                      collapsed={collapsed}
                      location={location}
                      skin={this.state.skin}
                    />
                  </Affix>
                ) : (
                  <div>
                    <BaseMenu
                      collapsed={collapsed}
                      location={location}
                      skin={this.state.skin}
                    />
                  </div>
                )}
              </div>
              <Content className={styles.content}>{children}</Content>
            </Layout>
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
