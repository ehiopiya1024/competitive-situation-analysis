import React from "react";
import { connect } from "dva";

import Styles from "./ArticlePage.less";
import CenterSpin from "../../components/centerSpin/CenterSpin";

class ArticlePage extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch({ type: "articleContent/getData", title: match.params.title });
  }

  render() {
    const { articleContent } = this.props;
    const { title, content, loading } = articleContent;
    return (
      <div className={Styles.root}>
        <div className={Styles.title}>{title}</div>
        <div className={Styles.content}>
          {loading ? <CenterSpin padding={true} /> : content}
        </div>
      </div>
    );
  }
}

export default connect(({ articleContent }) => ({ articleContent }))(
  ArticlePage
);
