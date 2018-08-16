import React from "react";
import { Row, Col, Spin } from "antd";
import { connect } from "dva";
import Styles from "./TagSearchPage.less";
import Article from "../../components/articles/components/Article";
import TagBox from "./components/TagBox";

class TagSearchPage extends React.Component {
  componentDidMount() {
    if (!this.props.match) return;
    const { dispatch } = this.props;
    dispatch({
      type: "tagSearch/getData",
      tagName: this.props.match.params.tagName
    });
  }

  handleTag = () => {
    const { dispatch, match } = this.props;
    dispatch({ type: "tagSearch/getData", tagName: match.params.tagName });
  };

  render() {
    const { tagSearch } = this.props;
    console.log(tagSearch);
    return (
      <Row gutter={70}>
        <Col span={16}>
          {tagSearch.loading ? (
            <Spin />
          ) : (
            tagSearch.articles.map((v, k) => (
              <Article key={k} data={v} handleTag={this.handleTag} />
            ))
          )}
        </Col>
        <Col span={7}>
          <TagBox title="当前标签" tags={this.props.match.params.tagName} />
          <TagBox title="相关标签" tags={tagSearch.associatedTag} />
        </Col>
      </Row>
    );
  }
}

export default connect(({ tagSearch }) => ({ tagSearch }))(TagSearchPage);
