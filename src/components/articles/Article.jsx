import React from "react";
import { Row, Col, Tag, Icon } from "antd";
import styles from "./Article.less";

class Article extends React.Component {
  handleStar = () => {
    const { star } = this.state;
    this.setState({
      star: !star
    });
  };

  state = {
    star: false
  };

  render = () => {
    const { data } = this.props;
    return data ? (
      <div className={styles.root}>
        <Row className={styles.top}>
          <a>{data.title}</a>
          <p>{data.content}</p>
        </Row>
        <Row className={styles.bottom}>
          <Col span="12">
            {data.tags.map((v, k) => (
              <Tag key={k}>
                <Icon type="tag" />
                {v}
              </Tag>
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
              onClick={this.handleStar}
            />
          </Col>
        </Row>
      </div>
    ) : (
      <div className={styles.nothing}> 惊, 暂时没有内容哦 </div>
    );
  };
}

export default Article;
