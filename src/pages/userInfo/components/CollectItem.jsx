import React from "react";
import { Timeline } from "antd";
import { Link } from "react-router-dom";
import styles from "./collectItem.less";

class CollectItem extends React.Component {
  render() {
    const { collectDataNew } = this.props;

    return collectDataNew.map((item, index) => (
      <Timeline key={`collectItemNode-${index}`}>
        <div>{item.date}</div>
        {item.articles.map((article, i) => (
          <Timeline.Item key={`collectItemarticle-${i}`}>
            <div className={styles.articlePart}>
              <div className={styles.top}>
                <Link to="/" className={styles.title}>
                  {article.title}
                </Link>
                <p className={styles.collectTime}>{article.collectTime}</p>
              </div>
              <p className={styles.content}>{article.content}</p>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    ));
  }
}

export default CollectItem;
