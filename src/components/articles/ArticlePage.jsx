import React from "react";
import { Spin } from "antd";
import Article from "./Article";

class ArticlePage extends React.Component {
  state = {
    loading: true
  };

  type = "none";

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render = () => {
    const { type } = this.props.match.params;
    return this.state.loading ? <Spin /> : <Article />;
  };
}

export default ArticlePage;
