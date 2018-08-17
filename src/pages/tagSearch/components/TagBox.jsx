import React from "react";
import Styles from "./TagBox.less";

const TagBox = props => (
  <div className={Styles.root}>
    <div className={Styles.top}>
      <div>{props.title}</div>
    </div>
    <div className={Styles.bottom}>
      {props.tags
        ? props.tags.map((v, k) => (
            <div
              key={k}
              className={Styles.tag}
              onClick={
                props.handleChange
                  ? props.handleChange.bind(this, v, props.up)
                  : null
              }
            >
              {v}
            </div>
          ))
        : "没有相关标签"}
    </div>
  </div>
);

export default TagBox;
