import React from "react";
import { Row, Col, message } from "antd";
import { connect } from "dva";
import Article from "../../components/articles/components/Article";
import TagBox from "./components/TagBox";
import CenterSpin from "./components/CenterSpin";

class TagSearchPage extends React.Component {
  componentDidMount() {
    if (!this.props.match) return;
    const { dispatch } = this.props;
    dispatch({
      type: "tagSearch/getData",
      tagNames: [this.props.match.params.tagName]
    });
  }

  handleChangeCurrentTag = (tagName, goUp) => {
    const { dispatch, tagSearch } = this.props;
    const { currentTag } = tagSearch;
    let newTag;
    if (goUp) {
      for (let i = 0; i < currentTag.length; i += 1) {
        if (tagName === currentTag[i]) {
          return;
        }
      }
      currentTag.push(tagName);
      newTag = currentTag;
    } else {
      if (currentTag.length === 1) {
        message.info("至少保留一个标签");
        return;
      }
      newTag = currentTag.filter(e => e !== tagName);
    }
    dispatch({ type: "tagSearch/getData", tagNames: newTag });
  };

  handleTag = tagName => {
    const { dispatch } = this.props;
    dispatch({ type: "tagSearch/getData", tagNames: tagName });
  };

  render() {
    const { tagSearch } = this.props;
    const { loading, currentTag, associatedTags, articles } = tagSearch;
    const article = articles ? (
      articles.map((v, k) => (
        <Article key={k} data={v} handleTag={this.handleTag} />
      ))
    ) : (
      <div />
    );
    const associatedTag = associatedTags ? (
      <TagBox
        title="相关标签"
        tags={associatedTags}
        handleChange={this.handleChangeCurrentTag}
        up={true}
      />
    ) : (
      <div />
    );

    return loading ? (
      <CenterSpin />
    ) : (
      <Row gutter={70}>
        <Col span={16} style={{ height: "100%" }}>
          {article}
        </Col>
        <Col span={7}>
          <TagBox
            title="当前标签"
            tags={currentTag}
            handleChange={this.handleChangeCurrentTag}
            up={false}
          />
          {associatedTag}
        </Col>
      </Row>
    );
  }
}

export default connect(({ tagSearch }) => ({ tagSearch }))(TagSearchPage);
