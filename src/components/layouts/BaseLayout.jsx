import React, { Component } from "react";
import { connect } from "dva";
import { Layout, Icon, Drawer, Switch, Affix } from "antd";
import TopHeader from "../header/TopHeader";
import BaseMenu from "../menu/BaseMenu";
import styles from "./BaseLayout.less";
import { skins } from "../../utils/skins.json";

const { Content } = Layout;

class BaseLayout extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      visible: false
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
      if (id === skins[i].skinsId) {
        const { dispatch } = this.props;
        const { userpage } = this.props;
        const { user } = userpage;
        dispatch({
          type: "userpage/modifyUserInfo",
          user: {
            userId: user.userId,
            skinsId: parseInt(id, 10).toString()
          }
        });
        break;
      }
    }
  };

  onChangeLayout = checked => {
    const { dispatch } = this.props;
    const { userpage } = this.props;
    const { user } = userpage;
    dispatch({
      type: "userpage/modifyUserInfo",
      user: {
        userId: user.userId,
        skinsId: user.skinsId,
        fixed: checked
      }
    });
  };

  top = () => {
    const { userpage } = this.props;
    const { skin } = userpage;
    return (
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <TopHeader
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            skin={skin}
          />
        </div>
        {/* 系统设置菜单 */}
        <div className={styles.set} style={{ backgroundColor: skin.topColor }}>
          <a href="#" className={styles.setting} onClick={this.show}>
            <Icon type="setting" />
          </a>
        </div>
      </div>
    );
  };

  skinNode = () =>
    skins ? (
      skins.map((item, index) => (
        <div
          className={styles.part}
          onClick={this.changeSkin.bind(this, item.skinsId)}
          key={`skinNode-${index}`}
        >
          <span className={styles.title}>{item.title}</span>
          <div
            className={styles.skin}
            style={{ backgroundColor: item.topColor }}
          >
            <div
              className={styles.left}
              style={{ backgroundColor: item.leftColor }}
            />
            <div className={styles.right} />
          </div>
        </div>
      ))
    ) : (
      <div />
    );

  getRightMenu = () => {
    const { userpage } = this.props;
    const { user } = userpage;
    return (
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
                <span>固定布局</span>
                <Switch
                  onChange={this.onChangeLayout}
                  checked={user.fixed}
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="cross" />}
                />
              </div>
              <div className={styles.settingContent}>
                固定布局, 即导航栏将保持固定, 只有文档内容区域滚动，激活则取消.
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
  };

  render() {
    const { children, location } = this.props;
    const { collapsed } = this.state;

    const { userpage } = this.props;
    const { user, skin } = userpage;

    return (
      <Layout className={styles.root}>
        {/* 系统菜单 */}
        <div>
          {this.state.visible ? <div>{this.getRightMenu()}</div> : <div />}
        </div>
        <Layout>
          <div>
            {/* 顶部导航 */}
            {user.fixed ? <Affix>{this.top()}</Affix> : <div>{this.top()}</div>}
            <Layout>
              {/* 左侧菜单 */}
              <div
                style={{
                  width: "200px",
                  backgroundColor: skin.leftColor
                }}
              >
                {user.fixed ? (
                  <Affix offsetTop={58}>
                    <BaseMenu
                      collapsed={collapsed}
                      location={location}
                      skin={skin}
                    />
                  </Affix>
                ) : (
                  <div>
                    <BaseMenu
                      collapsed={collapsed}
                      location={location}
                      skin={skin}
                    />
                  </div>
                )}
              </div>
              {/* 内容区域 */}
              <Content className={styles.content}>{children}</Content>
            </Layout>
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default connect(({ userpage }) => ({ userpage }))(BaseLayout);
