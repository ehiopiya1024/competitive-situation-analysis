import React from "react";
import { Spin } from "antd";
import { connect } from "dva";
import Article from "./components/Article";
import Styles from "./components/Article.less";

class ArticlePage extends React.Component {
  componentDidMount() {
    const { dispatch, type } = this.props;
    dispatch({ type: "article/getArticle", payload: type });
  }

  render() {
    const { articleData } = this.props;
    const { loading, data } = articleData;
    return loading ? (
      <div className={Styles.spin_container}>
        <Spin size="large" />
      </div>
    ) : (
      data.map((v, k) => (
        <Article data={v} key={k} dispatch={this.props.dispatch} />
      ))
    );
  }
}

export default connect(({ article }) => ({ articleData: article }))(
  ArticlePage
);
