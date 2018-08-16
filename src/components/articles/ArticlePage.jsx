import React from "react";
import { Spin } from "antd";
import { connect } from "dva";
import Article from "./Article";
import Styles from "./Article.less";

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
      data.map((v, k) => <Article data={v} key={k} />)
    );
  }
}

export default connect(({ article }) => ({ articleData: article }))(
  ArticlePage
);
