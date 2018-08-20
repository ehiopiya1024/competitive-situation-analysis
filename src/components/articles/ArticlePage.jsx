import React from "react";
import { Spin } from "antd";
import { connect } from "dva";
import Article from "./components/Article";
import Styles from "./ArticlePage.less";

class ArticlePage extends React.Component {
  loadingNewArticle = (e, v) => {
    const scrollH = document.body.scrollHeight;
    const top = document.body.scrollTop;
    const sumH = document.body.clientHeight;
    if (sumH === scrollH + top) {
      console.log(true);
    }
    const { dispatch } = this.props;
  };

  componentDidMount() {
    const { dispatch, type } = this.props;
    dispatch({ type: "article/getArticle", payload: type });
    window.addEventListener("scroll", this.loadingNewArticle);
  }

  render() {
    const { articleData } = this.props;
    const { loading, data, showNumber, total } = articleData;
    return loading ? (
      <div className={Styles.spin_container}>
        <Spin size="large" />
      </div>
    ) : (
      <div className={Styles.content}>
        <div className={Styles.counter}>
          显示数量:
          {showNumber}
        </div>
        <div className={Styles.counter}>
          文章总数：
          {total}
        </div>
        {data.map((v, k) => (
          <Article data={v} key={k} dispatch={this.props.dispatch} />
        ))}
      </div>
    );
  }
}

export default connect(({ article }) => ({ articleData: article }))(
  ArticlePage
);
