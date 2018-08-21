import React from "react";
import { connect } from "dva";
import Article from "./components/Article";
import Styles from "./ArticlePage.less";
import CenterSpin from "../centerSpin/CenterSpin";

let page = -1;
class ArticlePage extends React.Component {
  loadingNewArticle = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight === clientHeight + scrollTop) {
      const { dispatch, type } = this.props;
      page += 1;
      dispatch({ type: "article/getArticle", pageType: type, page });
    }
  };

  componentDidMount() {
    const { dispatch, type } = this.props;
    page += 1;
    dispatch({ type: "article/getArticle", pageType: type, page });
    window.addEventListener("scroll", this.loadingNewArticle);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: "article/clear" });
    window.removeEventListener("scroll", this.loadingNewArticle);
    window.scrollTo(0, 0, true);
  }

  render() {
    const { articleData } = this.props;
    const { data, showNumber, total, loading } = articleData;
    return (
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
        {loading ? <CenterSpin padding={true} /> : null}
      </div>
    );
  }
}

export default connect(({ article }) => ({ articleData: article }))(
  ArticlePage
);
