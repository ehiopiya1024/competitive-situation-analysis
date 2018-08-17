import React from "react";
import { connect } from "dva";
import { Link } from "react-router-dom";
import { Row, Col, Tag, Icon, message } from "antd";
import styles from "./Article.less";

class Article extends React.Component {
  state = {
    star: false
  };

  componentDidMount() {
    if (this.props.data) this.setState({ star: this.props.data.liked });
  }

  handleLike = (id, liked) => {
    this.setState({ star: !liked });
    const { dispatch } = this.props;
    dispatch({ type: "article/like", articleId: id, message, liked });
  };

  render = () => {
    const { data } = this.props;
    return data ? (
      <div className={styles.root}>
        <Row className={styles.top}>
          <Link to={`/article/${data.title}`}>
            <a>{data.title}</a>
          </Link>
          <div>{data.content}</div>
        </Row>
        <Row className={styles.bottom}>
          <Col span="12">
            {data.tags.map((v, k) => (
              <Link key={k} to={`/tags/${v}`}>
                <Tag
                  onClick={
                    this.props.handleTag
                      ? this.props.handleTag.bind(this, [v])
                      : null
                  }
                >
                  <Icon type="tag" />
                  {v}
                </Tag>
              </Link>
            ))}
          </Col>
          <Col span="12" className={styles.pull_right}>
            <p>{data.time}</p>
            <Icon
              style={{
                fontSize: "18px",
                color: "#1890ff",
                cursor: "pointer",
                marginLeft: "10px"
              }}
              type={this.state.star ? "star" : "star-o"}
              title="收藏"
              onClick={this.handleLike.bind(this, data.id, this.state.star)}
            />
          </Col>
        </Row>
      </div>
    ) : (
      <div className={styles.nothing}> 惊, 暂时没有内容哦 </div>
    );
  };
}

export default connect(({ article }) => ({ articleData: article }))(Article);
