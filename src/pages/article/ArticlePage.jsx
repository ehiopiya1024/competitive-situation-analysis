import React from "react";
import { connect } from "dva";
import { Icon } from "antd";

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
      <div>
        <div className={Styles.back} onClick={this.props.history.goBack}>
          <Icon type="left" />
          返回
        </div>
        <div className={Styles.root}>
          <div className={Styles.title}>{title}</div>
          <div className={Styles.content}>
            {loading ? <CenterSpin padding={true} /> : content}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ articleContent }) => ({ articleContent }))(
  ArticlePage
);
