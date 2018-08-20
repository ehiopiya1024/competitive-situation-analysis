import React from "react";
import { Spin } from "antd";
import { connect } from "dva";
import Article from "./components/Article";
import Styles from "./ArticlePage.less";
import CenterSpin from "../centerSpin/CenterSpin";

const map = new Map([
  ["home", "今日推荐"],
  ["art", "艺术"],
  ["collection", "收藏"],
  ["literature", "文学"],
  ["thought", "思想"]
]);

class ArticlePage extends React.Component {
  loadingNewArticle = () => {
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.body;
    const { dispatch } = this.props;
    if (scrollHeight === clientHeight + scrollTop) {
      dispatch({ type: "article/pullArticle", page: "0" });
      console.log("loading...");
    }
  };

  componentDidMount() {
    const { dispatch, type } = this.props;
    dispatch({ type: "article/getArticle", payload: type });
    window.addEventListener("scroll", this.loadingNewArticle);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadingNewArticle);
  }

  render() {
    const { articleData, type } = this.props;
    const { loading, data, showNumber, total, loadingPull } = articleData;
    return loading ? (
      <div className={Styles.spin_container}>
        <Spin size="large" />
      </div>
    ) : (
      <div className={Styles.content}>
        <div className={Styles.counterbox}>
          <div className={Styles.counterbox}>
            <div className={Styles.counter}>
              显示
              {showNumber}
              条记录
            </div>
            <div className={Styles.counter}>
              共{total}
              条记录
            </div>
          </div>
        </div>
        {data.map((v, k) => (
          <Article data={v} key={k} dispatch={this.props.dispatch} />
        ))}
        {loadingPull ? <CenterSpin padding={true} /> : null}
      </div>
    );
  }
}

export default connect(({ article }) => ({ articleData: article }))(
  ArticlePage
);
