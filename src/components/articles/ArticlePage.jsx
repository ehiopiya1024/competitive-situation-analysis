import React from "react";
import { Spin } from "antd";
import { connect } from "dva";
import Article from "./Article";

@connect(({ demo }) => ({ demoData: demo })) // dva连接数据
class ArticlePage extends React.Component {
  needSpin = true;

  render() {
    const { dispatch, demoData } = this.props; // 使用数据
    console.log(dispatch);
    console.log(demoData);
    return this.needSpin ? <Spin /> : <Article />;
  }
}

export default ArticlePage;
